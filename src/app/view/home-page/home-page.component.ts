import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {PassengerAndFlightService} from 'src/app/service/passenger-and-flight.service';
import {Passenger} from 'src/app/model/passenger';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public loginForm!: FormGroup;
  passenger:Passenger = {
      passengerId:0,
      passengerName:'',
      passengerUsername:'',
      passengerPassword:'',
      passengerAge:0
 };

  constructor(private http: PassengerAndFlightService,private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit() {
this.http.getData(this.loginForm.value.username,this.loginForm.value.password).subscribe((response) => {

                              this.passenger=response;
                              console.log(this.passenger.passengerId);
 const passengerJson = JSON.stringify(this.passenger);

    this.router.navigate(['/passengerDetails'], { queryParams: { data: passengerJson } });

  });

}
}
