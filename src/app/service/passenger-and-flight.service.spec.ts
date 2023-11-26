import { TestBed } from '@angular/core/testing';

import { PassengerAndFlightService } from './passenger-and-flight.service';

describe('PassengerAndFlightService', () => {
  let service: PassengerAndFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerAndFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
