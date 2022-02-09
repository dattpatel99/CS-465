import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import {Trip} from "../../../models/trip";

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseURL = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseURL}trips/`;

  public addTrip(formData: Trip): Promise<Trip> { 
    return this.http
    .post(this.tripUrl, formData)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip>{
    return this.http
    .get(this.tripUrl + tripCode)
    .toPromise()
    .then(response => response.json() as Trip)
    .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]>{
    return this.http
    .get(this.tripUrl)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip>{
    return this.http
    .put(this.tripUrl + formData.code, formData)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError);
  }

  // FIXME: This does not need to return a trip
  public deleteTrip(tripCode: string): Promise<Trip[]>{
    return this.http
    .delete(this.tripUrl + tripCode)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any>{
    console.log("Some error occured.");
    return Promise.reject(error.message || error);
  }
}
