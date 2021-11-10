import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header -->
    <!-- there is no header rn lol -->

    <!-- Routes are injected here -->
    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer></app-footer>
  `,

  styles: []
})

export class AppComponent {
  title = 'homecooked';
}
