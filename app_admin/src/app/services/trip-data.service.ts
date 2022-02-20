import { Inject, Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Trip } from "../../../models/trip";
import { User } from "models/user";
import { AuthResponse } from "models/authresponse";
import { BROWSER_STORAGE } from "../storage";

@Injectable({
  providedIn: "root",
})
export class TripDataService {
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  private apiBaseURL = "http://localhost:3000/api/";
  private tripUrl = `${this.apiBaseURL}trips/`;

  public addTrip(formData: Trip): Promise<Trip> {
    return this.http
      .post(this.tripUrl, formData, {headers: new HttpHeaders().set('Authorization',`Bearer ${this.storage.getItem('travlr-token')}`)})
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then((response) => response as Trip)
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    return this.http
      .put(this.tripUrl + formData.code, formData, {headers: new HttpHeaders().set('Authorization',`Bearer ${this.storage.getItem('travlr-token')}`)})
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  public deleteTrip(tripCode: string): Promise<Trip[]> {
    return this.http
      .delete(this.tripUrl + tripCode)
      .toPromise()
      .then((response) => response as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log("Some error occured.");
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("login", user);
  }
  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("register", user);
  }
  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseURL}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then((response) => response as AuthResponse)
      .catch(this.handleError);
  }
}
