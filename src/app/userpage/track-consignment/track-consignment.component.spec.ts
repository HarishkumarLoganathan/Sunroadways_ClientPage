import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackConsignmentComponent } from './track-consignment.component';

describe('TrackConsignmentComponent', () => {
  let component: TrackConsignmentComponent;
  let fixture: ComponentFixture<TrackConsignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackConsignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
