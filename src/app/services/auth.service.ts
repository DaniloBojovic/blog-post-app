import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn() {
    return (
      localStorage.getItem('token') !== null &&
      localStorage.getItem('token') !== undefined
    );
  }
}
