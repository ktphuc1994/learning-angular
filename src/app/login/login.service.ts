import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() {}

  login = (email: string, password: string) => {
    if (email === 'admin@gmail.com' && password === 'admin') {
      alert('Admin login successful');
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (email === 'user@gmail.com' && password === 'user') {
      alert('User login successful');
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  };

  canLogin = () => this.isLoggedIn;
  canAccessAdmin = () => this.isAdmin;
}
