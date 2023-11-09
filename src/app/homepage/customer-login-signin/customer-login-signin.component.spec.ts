import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoginSigninComponent } from './customer-login-signin.component';

describe('CustomerLoginSigninComponent', () => {
  let component: CustomerLoginSigninComponent;
  let fixture: ComponentFixture<CustomerLoginSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLoginSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerLoginSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
