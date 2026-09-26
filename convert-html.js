const fs = require("fs");

function htmlToJsx(html) {
  // Extract content inside <body> (or <main> if available)
  let bodyContent = html;
  
  const mainMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (mainMatch) {
    bodyContent = mainMatch[1];
  }
  
  // Remove script tags
  bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  
  // Replace class with className
  bodyContent = bodyContent.replace(/class=/g, "className=");
  
  // Replace HTML comments with JSX comments
  bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");
  
  // Convert style="..." strings if any (basic regex)
  // Usually tailwind has no styles but just in case
  
  // Convert attributes to camelCase
  bodyContent = bodyContent.replace(/stroke-width/g, "strokeWidth");
  bodyContent = bodyContent.replace(/stroke-dasharray/g, "strokeDasharray");
  bodyContent = bodyContent.replace(/viewbox/gi, "viewBox");
  bodyContent = bodyContent.replace(/fill-rule/g, "fillRule");
  bodyContent = bodyContent.replace(/clip-rule/g, "clipRule");
  bodyContent = bodyContent.replace(/clip-path/g, "clipPath");
  bodyContent = bodyContent.replace(/stroke-linecap/g, "strokeLinecap");
  bodyContent = bodyContent.replace(/stroke-linejoin/g, "strokeLinejoin");
  bodyContent = bodyContent.replace(/xmlns:xlink/g, "xmlnsXlink");
  
  // Self-close tags
  const voidElements = ["img", "input", "br", "hr", "link", "meta", "circle", "rect", "path", "line", "polygon", "polyline"];
  for (const tag of voidElements) {
    const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, "gi");
    bodyContent = bodyContent.replace(regex, `<${tag}$1 />`);
  }
  
  // Remove stray </img> etc
  for (const tag of voidElements) {
    const regex = new RegExp(`</${tag}>`, "gi");
    bodyContent = bodyContent.replace(regex, "");
  }

  // Link conversions (href="#" to href="/login", etc based on page)
  
  return bodyContent;
}

// 1. Process screen2 (Home page)
const screen2Html = fs.readFileSync("temp-stitch/screen2-utf8.html", "utf-8");
let homeJsx = htmlToJsx(screen2Html);
// Update some links
homeJsx = homeJsx.replace(/href="#" data-path="login"/g, `href="/login"`);
homeJsx = homeJsx.replace(/href="#" data-path="dashboard"/g, `href="/dashboard"`);

const homeComponent = `import Link from "next/link";
export default function Home() {
  return (
    <>
      ${homeJsx}
    </>
  );
}
`;
fs.writeFileSync("src/app/page.tsx", homeComponent);

// 2. Process screen1 (Dashboard page)
if (!fs.existsSync("src/app/dashboard")) fs.mkdirSync("src/app/dashboard");
const screen1Html = fs.readFileSync("temp-stitch/screen1-utf8.html", "utf-8");
let dashJsx = htmlToJsx(screen1Html);
dashJsx = dashJsx.replace(/href="#" data-path="home"/g, `href="/"`);

const dashComponent = `import Link from "next/link";
export default function Dashboard() {
  return (
    <>
      ${dashJsx}
    </>
  );
}
`;
fs.writeFileSync("src/app/dashboard/page.tsx", dashComponent);

console.log("Converted files.");

