import { TestBed } from '@angular/core/testing';

import { ClarifaiService } from './clarifai.service';

describe('ClarifaiService', () => {
  let service: ClarifaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClarifaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
