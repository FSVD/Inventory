import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  logIn() {
    let link = ['/login'];
    this.router.navigate(link);
  }

  logOut() {
    this.auth.logOut();
    let link = [''];
    this.router.navigate(link);
  }
}
