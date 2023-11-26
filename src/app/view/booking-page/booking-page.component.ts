import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Booking} from 'src/app/model/booking';
import {Passenger} from 'src/app/model/passenger';
import {FlightDetails} from 'src/app/model/flight-details';
import { FlightService } from 'src/app/service/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})

export class BookingPageComponent implements OnInit{
  passenger:Passenger = {
         passengerId:0,
         passengerName:'',
         passengerUsername:'',
         passengerPassword:'',
         passengerAge:0
    };
    flightDetails: FlightDetails={
    airlineEntityName: '',
      arrivalAirportName: '',
      arrivalDateTime: new Date(), // Change to Date type
      availableSeats: 0,
      departureAirportName: '',
      departureDate: new Date(), // Change to Date type
      departureDateTime: new Date(), // Change to Date type
      duration: 0,
      flightId: 0,
      flightNumber: 0
    }
  loginForm!:FormGroup;
  booking:Booking={
  bookingId: 0,
      bookingDateTime:new Date(),
      bookingStatus: '',
      passengerReferenceId: 0,
      firstName: '',
      lastName: '',
      phone: 0,
      email: '',
      flightReferenceId: 0
  }
    constructor(private route: ActivatedRoute, private http: FlightService,private router: Router) {}
ngOnInit():void{
  this.route.queryParams.subscribe((queryParams) => {
      this.passenger = JSON.parse(queryParams['passenger']);
      this.flightDetails = JSON.parse(queryParams['flightDetails']);
      this.booking.passengerReferenceId = this.passenger.passengerId;
      this.booking.flightReferenceId= this.flightDetails.flightId;
      console.log('Passenger:', this.passenger);
      console.log(this.passenger.passengerId);
      console.log(this.passenger.passengerName);
      console.log(this.booking);
    });

}
submit(booking:Booking){
this.http.getBookingData(this.booking).subscribe((response) => {
                               this.booking=response;


                               const passengerJson = JSON.stringify(this.booking);

                                   this.router.navigate(['/successfulPage'], { queryParams: { data: passengerJson } });

                             });

}
submit2(){


}

}
