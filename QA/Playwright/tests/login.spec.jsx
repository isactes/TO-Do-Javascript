import { chromium, test  } from '@playwright/test';


test.describe('Login test demo', () => {
  test('login', async () => {
    const browsers  = await  chromium.launch();
    const context = await browsers.newContext();
    const page = await context.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/');
  })
})