import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuisine } from '../models/cuisine.model';

const baseUrl = 'http://localhost:8080/browseRecipes/byCuisine/';

@Injectable({
  providedIn: 'root'
})

export class CuisineService {

  constructor(private http: HttpClient) { }

  getAllRecipesByCuisine(cuisine: any): Observable<Cuisine[]> {

//     helper website to pass data (i.e., cuisine parameter) from component
//     page to service file method ("getAllRecipesByCuisine"):
//     https://betterprogramming.pub/angular-api-calls-the-right-way-264198bf2c64
    return this.http.get<Cuisine[]>(`${baseUrl}Mexican`);
//     return this.http.get<Cuisine[]>(`${baseUrl}` + cuisine);
  } 
}
