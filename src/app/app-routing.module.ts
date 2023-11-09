import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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

import { PartloadBookingComponent } from './userpage/book-your-consignment/partload-booking/partload-booking.component';
import { SidenavComponent } from './userpage/book-your-consignment/sidenav/sidenav.component';
import { BodyComponent } from './userpage/book-your-consignment/body/body.component';
import { FullTruckBookingComponent } from './userpage/book-your-consignment/full-truck-booking/full-truck-booking.component';
import { PendingBookingsComponent } from './userpage/book-your-consignment/pending-bookings/pending-bookings.component';

const routes: Routes = [
  { path: '', component: HOMEPAGEComponent },
  { path: 'user', component: UserpageComponent },
  { path: 'track', component: TrackConsignmentComponent },
  { path: 'mybookings', component: MyBookingsComponent },
  { path: 'mybillings', component: BillingComponent },


  

  {
    path: 'newbooking', component: BookYourConsignmentComponent,
    children: [{ path: '', component: PartloadBookingComponent },
    { path: 'PendingBookings', component: PendingBookingsComponent },
    { path: 'FullTruckBookings', component: FullTruckBookingComponent }]
  },

  { path: 'admin', component: AdminComponent },
  { path: 'forgetpassword', component: ForgotpasswordComponent },
  { path: 'otpverification', component: OtpverificationComponent },
  { path: 'PartLoadBooking', component: PartloadBookingComponent },









]

@NgModule({

  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
