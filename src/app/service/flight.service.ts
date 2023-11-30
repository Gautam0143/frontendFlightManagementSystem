import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Booking} from 'src/app/model/booking';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }
  private flightBaseUrl = 'https://frontendflightproject.uc.r.appspot.com';
     public getData(departure: Number, arrival: Number,departureDate:Date): Observable<any> {
         // Use template literals to interpolate variables into the URL string
//          const formattedDate = `${departureDate.getFullYear()}-${(departureDate.getMonth() + 1).toString().padStart(2, '0')}-${departureDate.getDate().toString().padStart(2, '0')}`;
         return this.http.get<any>(`${this.flightBaseUrl}/showflightDetailsBasedOnDepartureAndArrivalAndDepartureTime?departure=${departure}&arrival=${arrival}&departureDate=${departureDate}`);
       }

       private bookingBaseUrl='https://frontendflightproject.uc.r.appspot.com';
       public getBookingData(booking:Booking): Observable<any> {
                // Use template literals to interpolate variables into the URL string
       //          const formattedDate = `${departureDate.getFullYear()}-${(departureDate.getMonth() + 1).toString().padStart(2, '0')}-${departureDate.getDate().toString().padStart(2, '0')}`;
                return this.http.post<any>('https://frontendflightproject.uc.r.appspot.com/saveBooking' , booking);
                console.log(booking);
              }
}
