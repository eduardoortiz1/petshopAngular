import { TestBed } from '@angular/core/testing';

import { ServiuserService } from './serviuser.service';

describe('ServiuserService', () => {
  let service: ServiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
