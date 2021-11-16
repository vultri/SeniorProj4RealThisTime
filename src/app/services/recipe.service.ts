import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

const baseUrl = 'http://localhost:8080/byCuisine';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private http: HttpClient) { }

  getAllRecipesByCuisine(id: any): Observable<Recipe[]> {

    return this.http.get<Recipe[]>(`${baseUrl}?id=${id}`);

  } 
}
