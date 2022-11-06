import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  token!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    localStorage.setItem('token', this.token);
    this.router.navigateByUrl('/admindashboard');
  }

  navigate() {
    this.router.navigateByUrl('/articles');
  }
}
