import { test, expect } from '@playwright/test';
import logger from '@utils/logger';

test.beforeEach(async () => {
  // logger.info('Starting test:', logger.);
  logger.info('Starting test...');
});

test.afterEach(async () => {
  // logger.info('Finished test:', testInfo.status);
  logger.info('Finished test...');
});

test('GET an specific Pokemon from the Poke API', async ({ request }) => {
  logger.info('Launching browser');
  logger.warn('Slow API response');
  // logger.error({ error }, 'Request failed');
  const response = await request.get('https://pokeapi.co/api/v2/pokemon/ditto');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  logger.info(`Fetched Pokemon: ${data.name}`);
  expect(data.name).toBe('ditto');
  // console.log('response:');
  // console.log(response);
  // console.log('status:');
  // console.log(await response.json());
});