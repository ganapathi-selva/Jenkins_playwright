// tests/sample.test.ts
import { test, expect } from '@playwright/test';

test('should pass', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});

test('should fail', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Incorrect Title'); // This will fail
});

test('should be skipped', async ({ page }) => {
  test.skip(true, 'Skipping this test intentionally');
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});

test('should be flaky', async ({ page }) => {
  const shouldFail = Math.random() > 0.5;
  if (shouldFail) {
    test.fail('This test is flaky and might fail randomly');
  }
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});
