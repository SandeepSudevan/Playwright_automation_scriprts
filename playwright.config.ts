import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // 🔹 MUST export this
  testDir: "./tests",
  retries: 0,
  workers: 1,
  timeout: 20 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  reporter: "html",

  projects: [
    {
      name: "chrome",
      use: {
        browserName: "chromium",
        channel: "chrome", // 🔹 This makes it REAL Google Chrome
        headless: false,
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },
    {
      name: "edge",
      use: {
        browserName: "chromium",
        channel: "msedge",
        headless: false,
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },
  ],
});
