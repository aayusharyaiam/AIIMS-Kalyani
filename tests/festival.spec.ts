import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/about",
  "/events",
  "/gallery",
  "/contact",
  "/login",
  "/dashboard",
];

test("all pages have titles, accessible landmarks, and no horizontal overflow", async ({
  page,
}) => {
  // Audit the stable visual state rather than sampling halfway through a reveal.
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Elyssia 3.0/);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator("header")).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `horizontal overflow on ${route}`).toBe(false);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations,
      `accessibility on ${route}: ${JSON.stringify(results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })))}`,
    ).toEqual([]);
  }
  expect(errors).toEqual([]);
});

test("the reference hero loads and FAQs expand", async ({ page }, testInfo) => {
  await page.goto("/");
  const image = page.locator(".hero-art img");
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute("src", /hero-trojan/);
  await expect
    .poll(() => image.evaluate((img) => (img as HTMLImageElement).naturalWidth))
    .toBeGreaterThan(0);
  await page.screenshot({
    path: testInfo.outputPath("landing.png"),
    fullPage: true,
  });
  const faq = page.locator("details").first();
  await faq.locator("summary").click();
  await expect(faq).toHaveAttribute("open", "");
  await expect(faq.locator("p")).toBeVisible();
  await faq.locator("summary").click();
  await expect(faq).not.toHaveAttribute("open", "");
  await expect(page.locator(".hero-actions a").first()).toHaveAttribute(
    "href",
    "https://forms.gle/WLKkkYqyuJieRUEa7",
  );
});

test("event filtering, search, modal, and focus restoration work", async ({
  page,
}) => {
  await page.goto("/events");
  await page.getByRole("button", { name: "Music", exact: true }).click();
  await expect(page.locator(".event-card")).toHaveCount(1);
  await expect(page.locator(".event-card h3")).toHaveText("Pitch Perfect");
  const trigger = page.getByRole("button", {
    name: "Explore event",
    exact: true,
  });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("heading", { name: "Pitch Perfect" }),
  ).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "Rules & registration" }),
  ).toHaveAttribute("href", "/elyssia-brochure.pdf#page=40");
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page.getByRole("searchbox").fill("not-an-event");
  await expect(page.locator(".empty-state")).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.locator(".event-card")).toHaveCount(8);
});

test("bookmarks persist across navigation and reload, and plan download works", async ({
  page,
}) => {
  await page.goto("/events");
  await page
    .getByRole("button", { name: "Save Pitch Perfect", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Unsave Pitch Perfect", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.goto("/dashboard");
  await expect(page.locator(".event-card h3")).toHaveText("Pitch Perfect");
  await page.reload();
  await expect(page.locator(".event-card h3")).toHaveText("Pitch Perfect");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download my plan" }).click();
  expect((await download).suggestedFilename()).toBe("My-Elyssia-Plan.txt");
  await page
    .getByRole("button", { name: "Unsave Pitch Perfect", exact: true })
    .click();
  await expect(page.locator(".empty-state")).toBeVisible();
});

test("gallery lightbox supports next, keyboard navigation, and closing", async ({
  page,
}) => {
  await page.goto("/gallery");
  const trigger = page.getByRole("button", {
    name: "Open photograph: Nights to remember",
  });
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Next photograph" }).click();
  await expect(page.getByRole("dialog").getByRole("heading")).toHaveText(
    "Made of movement",
  );
  await page.keyboard.press("ArrowLeft");
  await expect(page.getByRole("dialog").getByRole("heading")).toHaveText(
    "Nights to remember",
  );
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page.getByRole("button", { name: "Campus life", exact: true }).click();
  await expect(page.locator(".gallery-tile")).toHaveCount(2);
});

test("planner validates, saves locally, and clears personal data with confirmation", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByLabel("What should we call you?").fill("   ");
  await page.getByLabel("College / institution").fill("AIIMS Patna");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Create my festival plan" }).click();
  await expect(page.locator("form").getByRole("alert")).toContainText(
    "not just spaces",
  );
  await page.getByLabel("What should we call you?").fill("Aayush");
  await page.getByRole("button", { name: "Create my festival plan" }).click();
  await expect(page).toHaveURL(/\/dashboard$/);
  await expect(
    page.getByRole("heading", { name: "AAYUSH’S ODYSSEY." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear my saved data" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Keep my plan" }).click();
  await expect(
    page.getByRole("heading", { name: "AAYUSH’S ODYSSEY." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear my saved data" }).click();
  await page
    .getByRole("button", { name: "Clear saved data", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "YOUR NEXT CHAPTER." }),
  ).toBeVisible();
  expect(
    await page.evaluate(() => localStorage.getItem("elyssia.planner.v1")),
  ).toBeNull();
});

test("navigation works on desktop and mobile", async ({ page }, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await expect(
      page.getByRole("dialog", { name: "Navigation" }),
    ).toBeVisible();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: /Events/ })
      .click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
  } else {
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Events", exact: true })
      .click();
  }
  await expect(page).toHaveURL(/\/events$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "OWN YOUR MOMENT",
  );
});

test("narrow mobile and tablet layouts stay within the viewport", async ({
  page,
}) => {
  test.setTimeout(60_000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/events", "/dashboard"]) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${route} at ${width}px`,
      ).toBe(true);
      if (route === "/") {
        await page.getByRole("button", { name: "Music", exact: true }).click();
        await expect(page.locator(".event-card")).toHaveCount(1);
        await expect(page.locator(".event-card")).toBeVisible();
      }
    }
  }
});

test("image failures and unavailable browser storage have useful feedback", async ({
  page,
}) => {
  await page.route("**/_next/image?*", (route) =>
    route.request().url().includes("hero-trojan")
      ? route.abort()
      : route.continue(),
  );
  await page.goto("/");
  await expect(page.locator(".hero-art .image-fallback")).toBeVisible();
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new Error("Storage unavailable");
    };
  });
  await page.goto("/events");
  await page
    .getByRole("button", { name: "Save Pitch Perfect", exact: true })
    .click();
  await expect(
    page.locator(".event-card").first().getByRole("alert"),
  ).toContainText("could not save");
});

test("image skeletons reflect real loading and motion can be paused", async ({
  page,
}) => {
  let releaseImage: () => void = () => {};
  const gate = new Promise<void>((resolve) => {
    releaseImage = resolve;
  });
  await page.route("**/_next/image?*", async (route) => {
    if (route.request().url().includes("hero-trojan")) await gate;
    await route.continue();
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".hero-art .image-skeleton")).toBeVisible();
  releaseImage();
  await expect(page.locator(".hero-art .image-skeleton")).toHaveCount(0);
  const motion = page.getByRole("button", {
    name: "Pause decorative animations",
  });
  await motion.click();
  await expect(motion).toHaveAttribute("aria-pressed", "true");
  expect(
    await page
      .locator(".strip-track")
      .evaluate((element) => getComputedStyle(element).animationPlayState),
  ).toBe("paused");
  await motion.click();
  await expect(motion).toHaveAttribute("aria-pressed", "false");
});

test("countdown transitions into festival-live and archive states", async ({
  page,
}) => {
  await page.clock.install({ time: new Date("2026-11-01T18:29:58Z") });
  await page.goto("/");
  await page.clock.fastForward(4000);
  await expect(page.locator(".countdown-section")).toContainText(
    "THE ODYSSEY IS HERE",
  );
  await page.clock.setSystemTime(new Date("2026-11-06T00:00:00+05:30"));
  await page.clock.runFor(1100);
  await expect(page.locator(".countdown-section")).toContainText(
    "THE MEMORIES LIVE ON",
  );
  await expect(page.locator(".countdown-section a")).toHaveAttribute(
    "href",
    "/gallery",
  );
});

test("reduced motion and missing pages are handled", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const animation = await page
    .locator(".hero-art img")
    .evaluate((element) => getComputedStyle(element).animationName);
  expect(animation).toBe("none");
  const response = await page.goto("/a-page-that-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "OFF THE MAP",
  );
  await expect(
    page.getByRole("link", { name: "Back to Elyssia" }),
  ).toBeVisible();
});
