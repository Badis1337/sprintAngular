import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi-ang';
  a = false;
  b = false;
  constructor(private router: Router) {}
  navigateDecision( ) {
    this.b = !this.b;
    this.a = false;
    this.router.navigateByUrl('/decision');
  }
  navigateHome( ) {
    this.a = !this.a;
    this.b = false;
    this.router.navigateByUrl('/home');
  }
}

