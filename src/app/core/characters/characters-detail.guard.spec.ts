import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { charactersDetailGuard } from './characters-detail.guard';

describe('charactersDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => charactersDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
