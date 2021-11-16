import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="dropdown navigation">
      
      <!-- Logo on left side of page -->
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="assets/img/Logo-B.png" width="200" alt="HomeCooked logo">
        </a>
      </div>

      <div class="navbar-end">

        <!-- Search bar on right side page -->

        <!-- Dropdown on right side of page -->
        <div class="navbar-item has-dropdown is-hoverable">
        
          <!-- Dropdown Root -->
          <a class="navbar-link">
            <i class="fas fa-user-circle fa-2x"></i>
          </a>

          <!-- Dropdown Items -->
          <div class="navbar-dropdown is-boxed mg-small">
            <a class="navbar-item">
              Log-In
            </a>

            <a class="navbar-item">
              Sign-Up
            </a>

            <a class="navbar-item">
              Settings
            </a>
          </div>
        </div>

        <!-- Cart Link -->
        <div class="buttons">
          <button class="button is-warning">
            <i class="fas fa-shopping-cart fa-lg"></i>
          </button>
        </div>

      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
