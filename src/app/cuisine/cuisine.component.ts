import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../models/cuisine.model';
import { CuisineService } from '../services/cuisine.service';

@Component({
  selector: 'app-cuisine',
  template: `
    Cuisine component working
    <app-recipe-list></app-recipe-list>
  `,
  styles: [
  ]
})
export class CuisineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
