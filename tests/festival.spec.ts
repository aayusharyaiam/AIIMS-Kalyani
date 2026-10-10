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
  const heroVideo = page.locator(".hero-art video");
  await expect(heroVideo).toBeVisible();
  await expect(heroVideo).toHaveAttribute("poster", /hero-trojan/);
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

test("hero text animates on first load and scroll progress is mounted", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(page.locator(".hero h1 .split-item")).toHaveCount(7);
  await expect(page.locator(".hero h1 .split-item").first()).toHaveCSS(
    "animation-name",
    "text-reveal",
  );
  await expect(page.locator(".scroll-progress")).toBeAttached();
});

test("event filtering, search, modal, and focus restoration work", async ({
  page,
}) => {
  await page.goto("/events");
  await page.getByRole("button", { name: "Music", exact: true }).click();
  await expect(page.locator(".event-card")).toHaveCount(1);
  await expect(page.locator(".event-card h3")).toHaveText("Euphony");
  const trigger = page.getByRole("button", {
    name: "Explore event",
    exact: true,
  });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("heading", { name: "Euphony", exact: true }),
  ).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "Open brochure" }),
  ).toHaveAttribute("href", "/elyssia-brochure.pdf");
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page.getByRole("searchbox").fill("not-an-event");
  await expect(page.locator(".empty-state")).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.locator(".event-card")).toHaveCount(8);
});

test("overall club programmes expose the supplied schedules and links", async ({
  page,
}) => {
  await page.goto("/events");
  const titles = await page.locator(".event-card h3").allTextContents();
  expect(titles).toEqual([
    "Abhivyakti",
    "Sanrachna",
    "Euphony",
    "Quizophrenia",
    "Sparta",
    "Couture En Vogue",
    "Dramatiks",
    "The Oracle of Words",
  ]);

  const danceCard = page.locator(".event-card").filter({ hasText: "Abhivyakti" });
  await danceCard.getByRole("button", { name: "Explore event" }).click();
  const dialog = page.getByRole("dialog", { name: "Abhivyakti" });
  await expect(dialog).toContainText("Shringar — Solo Classical Dance");
  await expect(dialog).toContainText("Zumba Workshop");
  await expect(
    dialog.getByRole("link", { name: "Registration form" }),
  ).toHaveAttribute("href", "https://forms.gle/UpikuHyLYhuSFLJm9");
  await expect(
    dialog.getByRole("link", { name: "Instagram updates" }),
  ).toHaveAttribute(
    "href",
    "https://instagram.com/nritya__avishkar.aiimsk?obrf=c216bG1kNGR3aTdv",
  );
  await page.keyboard.press("Escape");

  const euphonyCard = page.locator(".event-card").filter({ hasText: "Euphony" });
  await euphonyCard.getByRole("button", { name: "Explore event" }).click();
  const euphonyDialog = page.getByRole("dialog", { name: "Euphony" });
  await expect(euphonyDialog).toContainText("Pitch Perfect — Solo & Duet Singing");
  await expect(euphonyDialog.getByRole("link", { name: "Open brochure" })).toHaveAttribute(
    "href",
    "/elyssia-brochure.pdf",
  );
});

test("SEO metadata and discovery routes are available", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /annual socio-cultural festival of AIIMS Kalyani/,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    /Elyssia 3\.0/,
  );
  await expect(page.locator('link[rel="manifest"]')).toHaveAttribute(
    "href",
    "/manifest.webmanifest",
  );
  await expect(
    page.getByRole("link", { name: "View official brochure" }),
  ).toHaveAttribute("href", "/elyssia-brochure.pdf");
  await expect(
    page.getByRole("link", { name: "Download brochure" }),
  ).toHaveAttribute("download", "Elyssia-2026-Brochure.pdf");

  for (const route of ["/about", "/events"]) {
    await page.goto(route);
    await expect(
      page.getByRole("link", { name: "View official brochure" }),
    ).toHaveAttribute("href", "/elyssia-brochure.pdf");
    await expect(
      page.getByRole("link", { name: "Download brochure" }),
    ).toHaveAttribute("download", "Elyssia-2026-Brochure.pdf");
  }

  for (const route of ["/robots.txt", "/sitemap.xml"]) {
    const response = await request.get(route);
    expect(response.status()).toBe(200);
  }
});

test("bookmarks persist across navigation and reload, and plan download works", async ({
  page,
}) => {
  await page.goto("/events");
  await page
    .getByRole("button", { name: "Save Euphony", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Unsave Euphony", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.goto("/dashboard");
  await expect(page.locator(".event-card h3")).toHaveText("Euphony");
  await page.reload();
  await expect(page.locator(".event-card h3")).toHaveText("Euphony");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download my plan" }).click();
  expect((await download).suggestedFilename()).toBe("My-Elyssia-Plan.txt");
  await page
    .getByRole("button", { name: "Unsave Euphony", exact: true })
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
    route.request().url().includes("https://i.ibb.co/MDPZCn88/DSC01844-1.webp")
      ? route.abort()
      : route.continue(),
  );
  await page.goto("/");
  await expect(page.locator(".intro-image .image-fallback")).toBeVisible();
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new Error("Storage unavailable");
    };
  });
  await page.goto("/events");
  const euphonyCard = page.locator(".event-card").filter({ hasText: "Euphony" });
  await euphonyCard
    .getByRole("button", { name: "Save Euphony", exact: true })
    .click();
  await expect(
    euphonyCard.getByRole("alert"),
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
    if (route.request().url().includes("https://i.ibb.co/MDPZCn88/DSC01844-1.webp")) await gate;
    await route.continue();
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".intro-image .image-skeleton")).toBeVisible();
  releaseImage();
  await expect(page.locator(".intro-image .image-skeleton")).toHaveCount(0);
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
    .locator(".hero-art video")
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
