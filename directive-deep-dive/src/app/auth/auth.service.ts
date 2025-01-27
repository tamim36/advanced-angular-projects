import { Injectable, signal } from '@angular/core';

import { Permission } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  activePermission = signal<Permission>('guest');

  authenticate(email: string, password: string) {
    //console.log(email, password);
    if (email === 'admin@example.com' && password === 'admin') {
      console.log('admin permission given');
      this.activePermission.set('admin');
    } else if (email === 'user@example.com' && password === 'user') {
      console.log('user permission given');
      this.activePermission.set('user');
    } else {
      console.log('guest permission given');
      this.activePermission.set('guest');
    }
  }

  logout() {
    this.activePermission.set('guest');
  }
}
