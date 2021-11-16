import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../models/cuisine.model';
import { CuisineService } from '../services/cuisine.service';
import { JsonPipe } from '@angular/common';



// @Component({
//   selector: 'app-recipe-list',
//   template: `
//     <ul class="list-group">
//       <li
//         class="list-group-item"
//         *ngFor="let recipe of recipes"
//       >
//         {{ recipe.name }}
//       </li>
//     </ul>
//   `,
//   styles: [
//   ]
// })



// for debugging purposes:
// using JsonPipe to print out the list of recipes by cuisine in json format
// to the browser
@Component({
  selector: 'app-recipe-list',
  template: `
  <h1 class="title has-text-centered is-dark lora" style="font-size:35px;">Featured Recipes</h1>
  <div class="card">
        <div class="card-image">
          <figure class="image is-3by2">
            <img src="/assets/img/recipe-image-1.jpg" alt="recipe">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <ng-container *ngFor = "let recipe of recipes">
                  <p class="title is-4">{{recipe.recipeName}}</p>
                  <p class="is-6">Description: {{recipe.recipeDescription}}</p>
                  <p class="is-6">Cuisine: {{recipe.recipeCuisine}}</p>
                  <br>
              </ng-container>
            </div>
          </div>

          <div class="content">
            Recipe description
          </div>
        </div>
      </div>
  `
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