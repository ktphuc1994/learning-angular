import { InjectionToken } from '@angular/core';

export const localStorageToken = new InjectionToken<Storage>('local-storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
});
