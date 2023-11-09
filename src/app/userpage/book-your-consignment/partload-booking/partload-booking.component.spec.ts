import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartloadBookingComponent } from './partload-booking.component';

describe('PartloadBookingComponent', () => {
  let component: PartloadBookingComponent;
  let fixture: ComponentFixture<PartloadBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartloadBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartloadBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
