import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CharactersApiService } from './characters-api.service';

export const charactersDetailGuard: CanActivateFn = (route, state) => {

  const marvelService = inject(CharactersApiService);

  return true;
};
