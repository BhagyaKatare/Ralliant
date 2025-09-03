// import { test, expect } from "@playwright/test";
// import axios from "axios";
// import { MotionLoginPage } from "../Pages/MotionLoginPage";
// import loginData from "../testdata/motionLoginData.json";

// test("Bypass Cloudflare Turnstile and Login to Motion.com", async ({ page }) => {
//   test.setTimeout(120000);

//   // 1. Go to Motion.com
//   await page.goto("https://www.motion.com");

//   // 2. Wait for Turnstile iframe and extract sitekey
//   const checkboxLocator = await page.locator("//span[@class='cb-i']");
//   if (!checkboxLocator) throw new Error("❌ Turnstile checkbox not found!");
//   console.log("✅ Sitekey found:", checkboxLocator);

//   const apiKey = "8bbdb72a5a254f639b84ef49329299a0"; // Your 2Captcha API key
//   const siteUrl = "https://www.motion.com";

//   // 3. Ask 2Captcha to solve the Turnstile challenge
//   const { data: createResp } = await axios.post(
//     "http://2captcha.com/in.php",
//     null,
//     {
//       params: {
//         key: apiKey,
//         method: "turnstile",
//         checkboxLocator: checkboxLocator,
//         pageurl: siteUrl,
//         json: 1,
//       },
//     }
//   );

//   // Assert the type of createResp
//   const resp = createResp as { status: number; request: string };
//   if (resp.status !== 1) throw new Error("❌ Failed to create captcha task: " + JSON.stringify(resp));
//   const captchaId = resp.request;
//   console.log("🕒 Captcha task created:", captchaId);

//   // 4. Poll until 2Captcha returns a solution
//   let token = "";
//   for (let i = 0; i < 20; i++) {
//     await new Promise(res => setTimeout(res, 5000)); // wait 5s
//     const { data: resultRespRaw } = await axios.get("http://2captcha.com/res.php", {
//       params: {
//         key: apiKey,
//         action: "get",
//         id: captchaId,
//         json: 1,
//       },
//     });
//     const resultResp = resultRespRaw as { status: number; request: string };
//     if (resultResp.status === 1) {
//       token = resultResp.request;
//       console.log("✅ Captcha solved! Token received.");
//       break;
//     } else {
//       console.log("⏳ Captcha not ready yet, retrying...");
//     }
//   }
//   if (!token) throw new Error("❌ Captcha solving failed or timed out.");

//   // 5. Inject solution into hidden Turnstile response field
//   await page.evaluate((token) => {
//     const input = document.querySelector<HTMLInputElement>("input[name='cf-turnstile-response']");
//     if (input) {
//       input.value = token;
//     } else {
//       console.error("❌ Turnstile hidden input not found!");
//     }
//   }, token);

//   // 6. Trigger validation
//   await page.evaluate(() => {
//     const form = document.querySelector("form");
//     if (form) (form as HTMLFormElement).submit();
//   });

//   // 7. Wait for navigation after bypass
//   await page.waitForLoadState("networkidle");
//   console.log("🎉 Successfully bypassed Cloudflare challenge!");

//   // 8. Continue with Login Flow
//   const loginPage = new MotionLoginPage(page);

//   // Click sign-in label
//   const signInLocator = page.locator('//div[@class="header_signInLabel__1WJCv"]');
//   await expect(signInLocator).toBeVisible({ timeout: 10000 });
//   console.log("✅ Sign-in label is visible");

//   await signInLocator.click();

//   // Perform login using your POM
//   await loginPage.login(loginData.username, loginData.password);
//   console.log("🎯 Login successfully completed!");
// });
