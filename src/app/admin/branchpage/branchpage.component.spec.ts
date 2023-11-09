import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchpageComponent } from './branchpage.component';

describe('BranchpageComponent', () => {
  let component: BranchpageComponent;
  let fixture: ComponentFixture<BranchpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
