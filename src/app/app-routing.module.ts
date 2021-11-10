import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineComponent } from './cuisine/cuisine.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
  {
    path: 'cuisine',
    component: CuisineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
