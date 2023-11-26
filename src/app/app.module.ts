import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatDatepickerModule } from '@angular/material/datepicker'; // Import MatDatepickerModule
import { MatNativeDateModule } from '@angular/material/core'; // Import MatNativeDateModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

import { FlightSearchPageComponent } from './view/flight-search-page/flight-search-page.component';
import {PassengerAndFlightService} from 'src/app/service/passenger-and-flight.service';
import {FlightService} from 'src/app/service/flight.service';
import { BookingPageComponent } from './view/booking-page/booking-page.component';
import { SuccessPageComponent } from './view/success-page/success-page.component';
import { SignupPageComponent } from './view/signup-page/signup-page.component';
@NgModule({
  declarations: [AppComponent, HomePageComponent, FlightSearchPageComponent, BookingPageComponent, SuccessPageComponent, SignupPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
     MatSelectModule, // Add MatSelectModule to imports
        MatDatepickerModule, // Add MatDatepickerModule to imports
        MatNativeDateModule, // Add MatNativeDateModule to imports
        MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // Add HttpClientModule here
  ],
  providers: [PassengerAndFlightService,FlightService], // Add the service to the providers array
  bootstrap: [AppComponent],
})
export class AppModule {}
