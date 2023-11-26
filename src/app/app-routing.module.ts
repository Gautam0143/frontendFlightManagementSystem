import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './view/home-page/home-page.component';
import {FlightSearchPageComponent} from 'src/app/view/flight-search-page/flight-search-page.component';
import {BookingPageComponent} from 'src/app/view/booking-page/booking-page.component';
import {SuccessPageComponent} from 'src/app/view/success-page/success-page.component';
const routes: Routes = [{ path: 'home', component: HomePageComponent },
                        { path: '', component: HomePageComponent},
                        { path: 'passengerDetails', component: FlightSearchPageComponent},
                        { path: 'bookingDetails', component: BookingPageComponent},
                        { path: 'successfulPage', component: SuccessPageComponent},
                        { path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
