import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/AuthService';

@Component({
  selector: 'app-login-system',
  imports: [CommonModule],
  templateUrl: './login-system.html',
  styleUrl: './login-system.css',
})
export class LoginSystem {
  private authService = inject(AuthService);
  private router = inject(Router);

  onLogin():void{
    this.authService.login();
    this.router.navigate(['/ships']);
  }
}
