import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Booking} from 'src/app/model/booking';
@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
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
constructor(private route: ActivatedRoute,private router: Router) {}
ngOnInit():void{
  this.route.queryParams.subscribe((queryParams) => {
      this.booking = JSON.parse(queryParams['data']);

    });
}
}
