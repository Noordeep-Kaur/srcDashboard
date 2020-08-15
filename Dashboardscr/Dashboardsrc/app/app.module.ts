import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { CurrentBookingsComponent } from './current-bookings/current-bookings.component';
import { PreviousBookingsComponent } from './previous-bookings/previous-bookings.component';
import { CancelledBookingsComponent } from './cancelled-bookings/cancelled-bookings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { WalletComponent } from './wallet/wallet.component';
import { ChangePasswordService} from './services/dashboardSevcice';
import { PickupService} from './services/pickups.Service';
import { PickupComponent } from './pickup/pickup.component';
import { DropComponent } from './drop/drop.component';


var myRoutes:Routes=[
  {path:"bookings",component:BookingsComponent,children:[
    {path:"previousBookings",component:PreviousBookingsComponent},
    {path:"currentBookings",component:CurrentBookingsComponent},
    {path:"cancelledBookings",component:CancelledBookingsComponent}
    ]},
  
  {path:"profile",component:ProfileComponent},
  {path:"change-password",component:ChangePasswordComponent},
  {path:"wallet",component:WalletComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookingsComponent,
    ProfileComponent,
    CurrentBookingsComponent,
    PreviousBookingsComponent,
    CancelledBookingsComponent,
    ChangePasswordComponent,
    WalletComponent,
    PickupComponent,
    DropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [ChangePasswordService,PickupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
