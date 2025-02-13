import { TestBed } from '@angular/core/testing';

import { LoggerServiceTsService } from './logger.service.ts.service';

describe('LoggerServiceTsService', () => {
  let service: LoggerServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
