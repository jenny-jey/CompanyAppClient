import { Component } from '@angular/core';
import { ApiAuthService } from '../../services/api.authservice';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone : true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  confirmPassword = '';
  showRegister: boolean = false;

  constructor(private authService: ApiAuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).forEach(
      (response) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/companies']);
      }
    ).catch(() => {
        alert('Invalid credentials');
      }
    );
  }

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    else{
      this.register();
    }
  }

  register()
  {
    if (this.username && this.password) {
      this.authService.register(this.username, this.password).subscribe({
        next: (data) => {
          console.log('User registered:', data);
          alert('User registered successfully!');
          this.showRegister = false;
        },
        error: (err) => {
          console.error('Error registering user:', err);
          alert('Failed to register user!');
        }
      });
    } 
  }

  toggleRegister() {
    this.showRegister = !this.showRegister;
  }
}
