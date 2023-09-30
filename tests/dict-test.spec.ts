// @ts-check

import { expect, test } from '@playwright/test';
import { BASE_URL } from './constants';

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByTestId('lang-selector').selectOption({ label: 'Test language' });
  await page.waitForTimeout(50);
  await page.goto(BASE_URL + '/language/1/dictionary');
});

test('Can go through word life cycle', async ({ page }) => {
  await page.getByTestId('add-word-btn').click();
  await page.waitForURL('**/dictionary/edit');
  await page.getByTestId('word-input').fill('test word');
  await page.getByTestId('definition-input').fill('go');
  await page.getByTestId('definition-results').getByText('go (to a place)').click();
  await expect(page.getByTestId('linked-definitions').getByText('go (to a place)')).toBeVisible();
  await page.getByTestId('part-of-speech-select').selectOption('noun');
  await page.waitForTimeout(100);

  await page.getByTestId('word-submit-btn').click();
  await page.waitForURL('**/dictionary');
  await expect(page.getByTestId('dictionary-results').getByText('test word')).toBeVisible();
  await page.getByTestId('test word-delete-btn').click();
  await expect(page.getByTestId('dictionary-results').getByText('test word')).not.toBeVisible();
});
