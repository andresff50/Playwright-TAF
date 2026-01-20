import { test } from '@playwright/test';
import { logger } from '@utils/logger';
import { EnvConfig } from '@config/env.config';

test('Demostración de niveles de Logs en Winston', async ({ page }) => {

  // 1. Nivel INFO: Para hitos importantes del test
  logger.info('--- INICIO DEL TEST DE DEMOSTRACIÓN ---');

  // 2. Nivel DEBUG: Para detalles técnicos (útil cuando algo falla y quieres ver pasos internos)
  // logger.debug('Abriendo el navegador en modo headless...');
  await page.goto(EnvConfig.BASE_URL);
  // logger.debug('URL cargada exitosamente.');

  // await page.fill('#user-name', EnvConfig.USER_NAME);
  // await page.fill('#password', EnvConfig.PASSWORD);
  // await page.click('#login-button');

  // 3. Nivel WARN: Para situaciones inesperadas que no rompen el test
  // const title = await page.title();
  // if (title !== 'Playwright') {
  //   logger.warn(`El título de la página es "${title}", no coincide exactamente con "Playwright", pero continuaremos.`);
  // }

  // 4. Nivel ERROR: Para capturar fallos críticos
  // try {
  //   logger.debug('Intentando hacer clic en un botón que no existe para forzar un error...');
  //   await page.click('#boton-inexistente', { timeout: 2000 });
  // } catch (error: any) {
  //   logger.error('No se pudo encontrar el botón. Error capturado correctamente en el catch.');
  //   logger.error(`Detalle del error: ${error.message}`);
  // }

  logger.info('--- FIN DEL TEST DE DEMOSTRACIÓN ---');
});