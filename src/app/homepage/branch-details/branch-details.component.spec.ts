import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BRANCHDETAILSComponent } from './branch-details.component';

describe('BRANCHDETAILSComponent', () => {
  let component: BRANCHDETAILSComponent;
  let fixture: ComponentFixture<BRANCHDETAILSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BRANCHDETAILSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BRANCHDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
