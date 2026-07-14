import { test, expect } from '@playwright/test'

test('launch browser' async ({page})=>{
    
  await page.goto('www.bbc.co.uk');

  await page.locator().click();
})