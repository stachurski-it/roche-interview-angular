import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrewerApiService {
  private SERVER_URL_BREWERIES = "http://localhost:8000/breweries";
  private SERVER_URL_STATES = "http://localhost:8000/states";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getBreweries(){
    return this.httpClient.get(this.SERVER_URL_BREWERIES).pipe(catchError(this.handleError));
  }
  
  public getStates(){
    return this.httpClient.get(this.SERVER_URL_STATES).pipe(catchError(this.handleError));
  }
}
