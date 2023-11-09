import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTruckBookingComponent } from './full-truck-booking.component';

describe('FullTruckBookingComponent', () => {
  let component: FullTruckBookingComponent;
  let fixture: ComponentFixture<FullTruckBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTruckBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullTruckBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
