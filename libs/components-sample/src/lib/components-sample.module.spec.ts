import { async, TestBed } from '@angular/core/testing';
import { ComponentsSampleModule } from './components-sample.module';

describe('ComponentsSampleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsSampleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentsSampleModule).toBeDefined();
  });
});
