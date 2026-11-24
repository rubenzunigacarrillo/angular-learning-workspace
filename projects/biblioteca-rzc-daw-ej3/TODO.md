# TODO
  - [x] 1. Páginas públicas con menú, redirección inicial y página 404. _(nivel básico, ya hecho)_
  - [x] 2. Catálogo de libros con detalle por `:id`, filtro por género con query params y zona `/mi-cuenta` con rutas hijas. _(nivel intermedio, ya hecho)_
  - [x] 3. Lazy loading de las páginas (excepto `Inicio` y `NoEncontrado`) y de `/mi-cuenta` con `loadChildren`. _(nivel avanzado)_
  - [ ] 4. Panel `/admin` con rutas hijas, protegido con `canActivate` y con login simulado que vuelve a la página pedida (`returnUrl`). _(avanzado)_
  - [ ] 5. Formulario de edición del título de un libro con `linkedSignal` y `canDeactivate` si hay cambios sin guardar. _(avanzado)_
  - [ ] 6. Detalle de libro con resolver (que redirige al catálogo si el libro no existe) y título de pestaña con `title`, estático y dinámico. _(avanzado)_
  - [ ] 7. Opciones del router: `withComponentInputBinding`, `withPreloading(PreloadAllModules)` y `withInMemoryScrolling`.
