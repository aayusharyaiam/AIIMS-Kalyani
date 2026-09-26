const fs = require("fs");
const html = fs.readFileSync("temp-stitch/screen3-utf8.html", "utf-8");
const start = html.indexOf("tailwind.config = ");
const end = html.indexOf("</script>", start);
const configStr = html.substring(start, end).trim();
const tailwind = {};
eval(configStr);
const config = tailwind.config;

let css = `@import "tailwindcss";

@theme inline {
  --color-background-theme: #090b12;
`;

for (const [k, v] of Object.entries(config.theme.extend.colors)) {
  css += `  --color-${k}: ${v};\n`;
}

for (const [k, v] of Object.entries(config.theme.extend.spacing)) {
  css += `  --spacing-${k}: ${v};\n`;
}

css += `
  --font-cinzel: "Cinzel", serif;
  --font-label-md: "Space Grotesk", sans-serif;
  --font-body-md: "Space Grotesk", sans-serif;
  --font-body-sm: "Space Grotesk", sans-serif;
  --font-display-hero: "Syne", sans-serif;
  --font-headline-md: "Syne", sans-serif;
  --font-headline-lg: "Syne", sans-serif;
}

@layer base {
  body {
    background-color: var(--color-background-theme);
    color: var(--color-on-surface);
  }
}
`;

fs.writeFileSync("src/app/globals.css", css);
console.log("Updated globals.css");

