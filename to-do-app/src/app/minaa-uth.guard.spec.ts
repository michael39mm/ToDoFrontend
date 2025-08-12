import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { minaaUTHGuard } from './minaa-uth.guard';

describe('minaaUTHGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => minaaUTHGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
