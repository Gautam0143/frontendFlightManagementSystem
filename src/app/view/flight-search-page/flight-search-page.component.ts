import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightService } from 'src/app/service/flight.service';
import {Passenger} from 'src/app/model/passenger';
import {FlightDetails} from 'src/app/model/flight-details';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-flight-search-page',
  templateUrl: './flight-search-page.component.html',
  styleUrls: ['./flight-search-page.component.css']
})
export class FlightSearchPageComponent implements OnInit{
  departure: number = 0;
  arrival: number = 0;
  departureDate: Date = new Date();
  flightDetailsData: any ; // Initialize flightDetailsData to null
 submitClicked: boolean = false;
  passenger:Passenger = {
       passengerId:0,
       passengerName:'',
       passengerUsername:'',
       passengerPassword:'',
       passengerAge:0
  };
  flightDetails: FlightDetails[]=[];
  f:any;
//   ={
//   airlineEntityName: '',
//     arrivalAirportName: '',
//     arrivalDateTime: new Date(), // Change to Date type
//     availableSeats: 0,
//     departureAirportName: '',
//     departureDate: new Date(), // Change to Date type
//     departureDateTime: new Date(), // Change to Date type
//     duration: 0,
//     flightId: 0,
//     flightNumber: 0
//   }
//  const combinedData = {
//    flight: flightDetails,
//    passenger: Passenger,
//  };
  constructor(private formBuilder: FormBuilder, private http: FlightService,private route: ActivatedRoute,private router: Router) {}

ngOnInit():void{
this.route.queryParams.subscribe((params) => {
         // Parse the JSON back to a Teacher object
         this.passenger = JSON.parse(params['data']);
});
}
  // Define your submit function here
  submit() {
    // Reset flightDetailsData to null before making the request
    this.http.getData(this.departure, this.arrival, this.departureDate).subscribe((response) => {
          console.log(this.departureDate);

console.log(this.passenger);
          // Check if flightDetails data is available
          if (response && response.length > 0) {
            this.f = response;
            console.log(this.f);
          } else {
            // If no data is available in the flightDetails, set flightDetailsData to null
            this.flightDetailsData = null;

          }
      }
    );
  }
  selectFlight(flight:FlightDetails){
  this.router.navigate(['/bookingDetails'], {
        queryParams: {
          passenger: JSON.stringify(this.passenger),
          flightDetails: JSON.stringify(flight),
        },
      });
  console.log("you are in flight page");
  }
}
