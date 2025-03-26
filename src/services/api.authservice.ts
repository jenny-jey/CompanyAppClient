import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "../environment";

@Injectable({
    providedIn: 'root' // Makes it a singleton service
  })
  

export class ApiAuthService{
    //private apiUrllogin = 'https://localhost:44343/api/Auth/login';
    //private apiUrlregister ='https://localhost:44343/api/Auth/register';

    private apiEndpoints = environment.apiEndpoints;

    constructor(private http: HttpClient, private router: Router) {}

    login(username: string, password: string): Observable<any> {
        return this.http.post(this.apiEndpoints.login, { username, password });
      }
    
      saveToken(token: string): void {
        localStorage.setItem('auth_token', token);
      }
    
      getToken(): string | null {
        return localStorage.getItem('auth_token');
      }
    
      isAuthenticated(): boolean {
        return this.getToken() !== null;
      }
    
      register(username: string, password: string): Observable<any> {
        
        return this.http.post(this.apiEndpoints.register, { username, password });
      }

      logout(): void {
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
      }

      getAuthHeaders(): HttpHeaders {
        const token = this.getToken();
        return new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
      }
}
