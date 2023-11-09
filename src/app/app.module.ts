import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import{ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConsignmentTrackComponent } from './homepage/consignment-track/consignment-track.component';
import { ShowcaseSectionComponent } from './homepage/showcase-section/showcase-section.component';
import { ButtonComponent } from './button/button.component';
import { CustomerLoginSigninComponent } from './homepage/customer-login-signin/customer-login-signin.component';
import { BRANCHDETAILSComponent } from './homepage/branch-details/branch-details.component';
import { CONTACTUSComponent } from './homepage/contact-us/contact-us.component';
import { HOMEPAGEComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { TrackConsignmentComponent } from './userpage/track-consignment/track-consignment.component';
import { MyBookingsComponent } from './userpage/my-bookings/my-bookings.component';
import { BillingComponent } from './userpage/billing/billing.component';
import { BookYourConsignmentComponent } from './userpage/book-your-consignment/book-your-consignment.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { BranchpageComponent } from './admin/branchpage/branchpage.component';
import { AuthInterceptor } from './auth/auth.interceptor'
import { AuthGuard } from './Services/auth.guard';
import { PartloadBookingComponent } from './userpage/book-your-consignment/partload-booking/partload-booking.component';
import { SidenavComponent } from './userpage/book-your-consignment/sidenav/sidenav.component';
import { BodyComponent } from './userpage/book-your-consignment/body/body.component';
import { FullTruckBookingComponent } from './userpage/book-your-consignment/full-truck-booking/full-truck-booking.component';
import { PendingBookingsComponent } from './userpage/book-your-consignment/pending-bookings/pending-bookings.component';
import { AppRoutingModule } from './app-routing.module';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConsignmentTrackComponent,
    ShowcaseSectionComponent,
    ButtonComponent,
    CustomerLoginSigninComponent,
    BRANCHDETAILSComponent,
    CONTACTUSComponent,
    HOMEPAGEComponent,
    UserpageComponent,
    UserheaderComponent,
    TrackConsignmentComponent,
    MyBookingsComponent,
    BillingComponent,
    BookYourConsignmentComponent,
    AdminComponent,
    ForgotpasswordComponent,
    OtpverificationComponent,
    BranchpageComponent,
    
    SidenavComponent,
    BodyComponent,
    FullTruckBookingComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,FormsModule,HttpClientModule,ReactiveFormsModule,CommonModule, AppRoutingModule,PartloadBookingComponent,PendingBookingsComponent
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
