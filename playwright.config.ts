// Playwright test configuration
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
//   timeout: 60000,
  use: {
    baseURL: 'https://www.motion.com/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 500, // 500ms delay between actions
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
