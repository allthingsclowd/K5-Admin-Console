import { TestBed, inject } from '@angular/core/testing';

import { BillingMgmtService } from './billing-mgmt.service';

describe('BillingMgmtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingMgmtService]
    });
  });

  it('should be created', inject([BillingMgmtService], (service: BillingMgmtService) => {
    expect(service).toBeTruthy();
  }));
});
