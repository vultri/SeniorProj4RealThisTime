import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-container',
  template: `

    <!-- Container for recipe tiles -->
    <div class="container is-fluid">
      <app-recipe-tile></app-recipe-tile> <app-recipe-tile></app-recipe-tile> <app-recipe-tile></app-recipe-tile> <app-recipe-tile></app-recipe-tile><app-recipe-tile></app-recipe-tile>
    </div>

  `,
  
  styles: [`
    .container{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
      grid-gap: 1em;
    }
  `]
})

export class RecipeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
