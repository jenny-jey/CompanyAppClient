import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiAuthService } from './api.authservice';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: ApiAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('JWT Interceptor Called'); 

    const token = this.authService.getToken();
    console.log('Token in interceptor:', token);

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`, 
        },
      });
      
    }
console.log('Modified Request Headers:', req.headers); // Debugging
    return next.handle(req);
  }
}