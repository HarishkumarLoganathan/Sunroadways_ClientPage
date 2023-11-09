import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentTrackComponent } from './consignment-track.component';

describe('ConsignmentTrackComponent', () => {
  let component: ConsignmentTrackComponent;
  let fixture: ComponentFixture<ConsignmentTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignmentTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
