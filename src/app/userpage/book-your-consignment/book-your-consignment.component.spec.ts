import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookYourConsignmentComponent } from './book-your-consignment.component';

describe('BookYourConsignmentComponent', () => {
  let component: BookYourConsignmentComponent;
  let fixture: ComponentFixture<BookYourConsignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookYourConsignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookYourConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
