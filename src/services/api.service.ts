import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { company } from '../app/company.model';
import { ApiAuthService } from './api.authservice';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  //private apiUrl = 'https://localhost:44343/api/Company'; 
  private apiEndpoints = environment.apiEndpoints;
  
  constructor(private http: HttpClient, private apiAuthService : ApiAuthService) {}

  //get all companies
  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiEndpoints.company);
  }

  //get company by id
  getCompanyById(id : number) : Observable<company>
  {
    // const token = localStorage.getItem('auth_token'); // Retrieve token from storage

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // });
    // console.log('Request Headers:', headers);
   
    // return this.http.get<company>(`${this.apiEndpoints.company}/${id}`, { headers });

    return this.http.get<company>(`${this.apiEndpoints.company}/${id}`);
  }

  //create company
  addCompany(company: any): Observable<any> {
    // const headers = this.apiAuthService.getAuthHeaders();
    // return this.http.post(`${this.apiEndpoints.company}`, company, { headers });
    const token = localStorage.getItem('auth_token'); // Retrieve token from storage

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}
  // });

  console.log('Request Headers:', headers);
   
  //return this.http.post(`${this.apiEndpoints.company}`, { headers: new HttpHeaders({'Authorization': 'Bearer ' + token})});

    return this.http.post(`${this.apiEndpoints.company}`, company, { headers });

  }
}
