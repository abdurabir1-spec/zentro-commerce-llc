import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1,
});

const errors = [];
page.on("pageerror", (error) => errors.push(error.message));

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
const title = await page.title();
const h1 = await page.locator("h1").innerText();
await page.screenshot({ path: "visual-desktop.png", fullPage: true });

await page.setViewportSize({ width: 390, height: 1200 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.screenshot({ path: "visual-mobile.png", fullPage: true });

await browser.close();

console.log(JSON.stringify({ title, h1, errors }, null, 2));
