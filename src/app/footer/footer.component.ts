import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>HomeCooked</strong> by Sunny Maynard and Greg Stafford.
        </p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      display: flex;
      height: 10vh;
      flex-direction: column;
      justify-content: space-between;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
