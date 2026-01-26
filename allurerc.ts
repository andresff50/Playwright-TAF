import { defineConfig } from "allure";

export default defineConfig({
  name: "Mi Reporte Allure Clásico",
  output: "./allure-report",
  plugins: {
    classic: {
      options: {
        // Nombre que aparece en el reporte
        reportName: "Mi Reporte Clásico",
        // Si quieres un único archivo HTML (en false genera múltiples archivos)
        singleFile: false,
        // Idioma (por defecto inglés)
        reportLanguage: "en",
      }
    }
  }
});