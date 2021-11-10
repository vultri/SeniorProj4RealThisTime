import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../models/cuisine.model';
import { CuisineService } from '../services/cuisine.service';

@Component({
  selector: 'app-recipe-list',
  template: `
    <ul class="list-group">
      <li
        class="list-group-item"
        *ngFor="let recipe of recipes"
      >
        {{ recipe.name }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {

  recipes?: Cuisine[];
  currentRecipe: Cuisine = {};
  currentIndex = -1;
  cuisine = '';

  constructor(private cuisineService: CuisineService) { }

  ngOnInit(): void {
    this.retrieveRecipes();
  }

  retrieveRecipes(): void {
    this.currentRecipe = {};
    this.currentIndex = -1;

    this.cuisineService.getAllRecipesByCuisine(this.cuisine)
      .subscribe(
        data => {
          this.recipes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}
