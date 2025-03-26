import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { companylist } from './companylist/companylist.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
    { path: 'login', component: LoginComponent},
    { path: 'companies', component: companylist }, // Company list page
  ];