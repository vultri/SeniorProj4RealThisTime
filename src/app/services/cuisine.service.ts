import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuisine } from '../models/cuisine.model';

const baseUrl = 'http://localhost:8080/byCuisine';

@Injectable({
  providedIn: 'root'
})

export class CuisineService {

  constructor(private http: HttpClient) { }

  getAllRecipesByCuisine(cuisine: any): Observable<Cuisine[]> {

    return this.http.get<Cuisine[]>(`${baseUrl}?cuisine=${cuisine}`);

  } 
}
