import { CanDeactivateFn } from '@angular/router';

export interface items {
  areNotSaved(): boolean;
}

export const notsavedGuard: CanDeactivateFn<items> = (component) => {
  if(!component.areNotSaved()) return true;

  return confirm('Hay cambios sin guardar. ¿Estás seguro de que quieres salir?');
};
