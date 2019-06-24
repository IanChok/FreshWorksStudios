import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user =>  {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
   }

   async login(email: string, password: string) {
      try {
        console.log('logged in with: ', email, ' ', password);
        await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/data-view']);
      } catch (err) {
        alert(`Error! ${err.message}`);
      }
   }

   async logout() {
     await this.afAuth.auth.signOut();
     localStorage.removeItem('user');
     this.router.navigate(['login']);
   }

   get isLogginedIn(): boolean {
     const user = JSON.parse(localStorage.getItem('user'));
     return user !== null;
   }
}
