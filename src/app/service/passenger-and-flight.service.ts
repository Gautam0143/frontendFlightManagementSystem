import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerAndFlightService {

constructor(private http: HttpClient) { }

  private passengerBaseUrl = 'https://frontendflightproject.uc.r.appspot.com';
   public getData(username: string, password: string): Observable<any> {
       // Use template literals to interpolate variables into the URL string
       return this.http.get<any>(`${this.passengerBaseUrl}/findByPassengerUsernameAndPassengerPassword?username=${username}&password=${password}`);
     }
}
