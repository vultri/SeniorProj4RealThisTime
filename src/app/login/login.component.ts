import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `

    <!-- Column container -->
    <div class="columns is-mobile center content">

      <!-- Column -->
      <div class="column is-half oxygen">

        Is the form input valid? {{ loginForm.valid }}

        <!-- Form -->
        <form (ngSubmit)="submitForm()" #loginForm="ngForm">

          <!-- Title -->
          <h1 class="title is-4 has-text-centered">Log in to your account</h1>

          <!-- Email field -->
          <div class="field">
            <p class="control has-icons-left">

              <!-- Email input field -->
              <input name="email" class="input" type="email" placeholder="Email" 
                [(ngModel)]="email" 
                #emailInput="ngModel" 
                required 
                email>
              
              <!-- Email icon -->
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>

            <!-- Email input validation: displays error message if input is invalid -->
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
              <p class="has-text-danger">Please enter a valid email address.</p>
            </div>

          </div> <!-- end email field -->

          <!-- Password field -->
          <div class="field">
            <p class="control has-icons-left">

              <!-- Password input field -->
              <input name="password" class="input" type="password" placeholder="Password" 
                [(ngModel)]="password" 
                #passwordInput="ngModel" 
                required>
              
              <!-- Password icon -->
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>

            <!-- Password input validation -->
            <div class="help is-error" *ngIf="passwordInput.invalid && passwordInput.touched">
              <p class="has-text-danger">Password required.</p>
            </div>
          
          </div> <!-- end password field -->

          <!-- Submit button -->
          <button type="submit" class="button is-primary" [disabled]="loginForm.invalid">Login</button>
        
        </form> <!-- end form -->
      </div> <!-- end column -->
    </div> <!-- end column container -->
  `,
  
  styles: [`
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content {
      height: 90vh;
    }
  `]
})

export class LoginComponent implements OnInit {
  email: String = "";
  password: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `My email is ${this.email}.`;
    alert(message); 
  }

}
