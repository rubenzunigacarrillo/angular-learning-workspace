import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withInMemoryScrolling, withPreloading } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules), // * En segundo plano, carga todos los archivos de ruta para otros componentes (lazy)
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }), // * Enables customizable scrolling behavior for router navigations.
    ),
  ],
};
