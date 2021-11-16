import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <!-- Hero banner -->
    <section class="hero is-primary has-text-light is-medium">

      <!-- Hero head: will stick at the top -->
      <div class="hero-head">

        <!-- Navbar -->
        <nav class="navbar is-transparent">

          <!-- NavBar Container -->
          <div class="container">

            <!-- Logo in top left-->
            <div class="navbar-brand">
              <a class="navbar-item lora title" style="font-size:30px;">
                HomeCooked.
              </a>
            </div>

            <!-- Navbar menu -->
            <div class="navbar-menu oxygen">

              <!-- Navbar end: will stick to the right -->
              <div class="navbar-end">

                <!-- Search field -->
                <div class="field has-addons">

                  <!-- Search text field -->
                  <p class="control">
                    <input class="input is-rounded" type="text" placeholder="Search recipes">
                  </p>

                  <!-- Search button -->
                  <p class="control">
                    <button class="button is-rounded">
                      Search
                    </button>
                  </p>

                </div> <!-- end search field -->
              
                <!-- Blank navbar link -->
                <a class="navbar-item">
                </a>

                <!-- Dropdown menu -->
                <div class="navbar-item has-dropdown is-hoverable">
                
                  <!-- Dropdown root -->
                  <a class="navbar-link">
                    <span class="navbar-item">
                      <i class="fas fa-user-circle fa-2x"></i>
                    </span>
                  </a>

                  <!-- Dropdown Items -->
                  <div class="navbar-dropdown is-boxed mg-small has-text-dark">

                    <!-- Blank dropdown Item -->
                    <a class="navbar-item">
                    </a>

                    <!-- Log-in link -->
                    <a class="navbar-item" routerLink="/login">
                      Log-in
                    </a>
                    
                    <!-- Sign-up link -->
                    <a class="navbar-item" routerLink="/register">
                      Sign-up
                    </a>

                  </div> <!-- end dropdown items -->
                </div> <!-- end dropdown menu -->

                <!-- Checkout button container -->
                <span class="navbar-item">

                  <!-- Checkout button -->
                  <a class="button is-warning oxygen" style="background-color: #E27843; font-weight:bold; font-size:15px;">
                    
                    <!-- Checkout button image -->
                    <span class="icon">
                      <i class="fas fa-shopping-cart fa-lg"></i>
                    </span>

                    <!-- Checkout button text -->
                    <span>Checkout</span>

                  </a> <!-- end checkout button -->
                </span> <!-- end checkout button container -->
              </div> <!-- end navbar end -->
            </div> <!-- end navbar menu -->
          </div> <!-- end navbar container -->
        </nav> <!-- end navbar -->
      </div> <!-- end hero head -->

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">

        <!-- Hero container -->
        <div class="container has-text-centered">

          <!-- Hero title -->
          <p class="lora">
            Empowering the modern cook.
          </p>

          <!-- Hero subtitle -->
          <p class="subtitle oxygen has-text-light">
            Browse our recipe inventory and order the ingredients delivered to your door - hassle-free.
          </p>

          <!-- Get Started button -->
          <button class="button is-warning oxygen" style="background-color:#E27843;font-weight:bold;font-size:15px;">Get Started</button>
        
        </div> <!-- end hero container -->
      </div> <!-- end hero body -->

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">

        <!-- Tabs -->
        <nav class="tabs">

          <!-- Tabs container -->
          <div class="container oxygen">

            <!-- Tabs list -->
            <ul>
              <li><a>American</a></li>
              <!-- trying to link "Mexican button to recipe-list.component.ts"-->
              <li><a routerLink="/cuisine">Mexican</a></li>
              <li><a>Indian</a></li>
              <li><a>Mediterranean</a></li>
              <li><a>Chinese</a></li>
              <li><a>Japanese</a></li>
            </ul>

          </div> <!-- end tabs container -->
        </nav> <!-- end tabs -->
      </div> <!-- end hero foot -->
    </section> <!-- end hero -->


    <!-- Featured recipes -->
    <section class="section is-small recipe-section">

      <!-- Title -->
      <h1 class="title has-text-centered is-dark lora" style="font-size:35px;">Featured Recipes</h1>

      <!-- Recipe container -->
      <app-recipe-container class="oxygen"></app-recipe-container>

    </section> <!-- end featured recipes -->


    <!-- Popular recipes -->
    <section class="section is-small">

      <!-- Title -->
      <h1 class="title has-text-centered is-dark lora" style="font-size:35px;">Popular Now</h1>

      <!-- Recipe container -->
      <app-recipe-container class="oxygen"></app-recipe-container>

    </section> <!-- end popular recipes -->
  `,

  styles: [`
    .hero {
    background-image: url('/assets/img/dim-hero-dark.jpg') !important;
    box-shadow: inset 0 0 99999px rgba(0, 0, 0, 0.9);
    background-size: cover;
    background-position: center center;
  }
  `]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
