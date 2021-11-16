import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-tile',
  template: `
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img src="/assets/img/recipe-image-1.jpg" alt="recipe">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Blueberry Parfait</p>
            <p class="is-6">Rating</p>
            <p class="is-6">Cook Time</p>
          </div>
        </div>

        <div class="content">
          Recipe description
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class RecipeTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
