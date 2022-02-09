import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import {Trip} from "../models/trip";

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseURL = 'http://localhost:3000/api/';

  public getTrips(): Promise<Trip[]>{
    return this.http
    .get(`${this.apiBaseURL}/trips`)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.log("Some error occured.");
    return Promise.reject(error.message || error);
  }
}
