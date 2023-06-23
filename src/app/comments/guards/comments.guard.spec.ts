import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { commentsResolver } from './comments.guard';

describe('commentsResolver', () => {
  const executeGuard: ResolveFn<InterfaceComment[]> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => commentsResolver(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
