import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports:[FormsModule,NgIf],
  template: `
    <div class="container mx-auto mt-5 p-6 max-w-lg">
  <h1 class="text-2xl font-bold mb-4">Connexion avec Email et Mot de Passe</h1>

  <div>
    <input [(ngModel)]="email" type="email" placeholder="Email" class="w-full px-4 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <input [(ngModel)]="password" type="password" placeholder="Mot de passe" class="w-full px-4 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />

    <button (click)="signIn()" class="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
      Se connecter
    </button>
  </div>

  <div *ngIf="user" class="mt-4">
    <p class="text-green-500">Utilisateur connecté: {{ user.email }}</p>
  </div>

  <div *ngIf="error" class="alert alert-danger mt-3 bg-red-100 text-red-600 p-4 rounded-md border border-red-300">
    <p>{{ error }}</p>
  </div>
</div>

  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  private auth: Auth = inject(Auth);

  constructor() {}

  signIn() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.user = userCredential.user;
        console.log('Utilisateur connecté:', userCredential);
      })
      .catch((error) => {
        this.error = error.message;
        console.error('Erreur de connexion:', error);
      });
  }
}