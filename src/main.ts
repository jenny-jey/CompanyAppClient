import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { companylist } from './app/companylist/companylist.component';
import { routes } from './app/app.routes';
import { ApiAuthService } from './services/api.authservice';
import { JwtInterceptor } from './services/JwtInterceptor';

bootstrapApplication(AppComponent, {
  providers: [ ApiAuthService,
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    provideHttpClient()]
}).catch(err => console.error(err));