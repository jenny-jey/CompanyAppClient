import { Component, input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { company } from '../company.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-companylist',
  standalone : true,
  imports: [CommonModule, FormsModule],
  templateUrl: './companylist.component.html',
  styleUrl: './companylist.component.css'
})

export class companylist implements OnInit {
  //companies: any[] = [];
  companies : company[] = [];
  id : number = 0;
  newCompany: company = new company(0, '', '', '', ''); 
  selectedCompany: company | null = null; 

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
   this.getCompanies();
  }

    // get all
  getCompanies() : void{
    this.apiService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  // get by id
  getCompanyById(): void {
    if (this.id > 0) {
      this.apiService.getCompanyById(this.id).subscribe({
        next: (data) => {
          const comp = new company(data.id, data.name, data.exchange, data.ticker, data.isin, data.website); // Convert API data to Company model
          this.selectedCompany = comp;
          console.log('Company details:', comp);
        },
        error: (err) => {
          console.error('Error fetching company by ID:', err);
          alert('Company not found!');
        }
      });
    } else {
      alert('Please enter a valid company ID.');
    }
  }

  // add company
  addCompany() : void
  {
    if (this.newCompany.name && this.newCompany.exchange && this.newCompany.isin && this.newCompany.ticker) {
      this.apiService.addCompany(this.newCompany).subscribe({
        next: (data) => {
          console.log('Company added:', data);
          this.getCompanies(); // Refresh list
          alert('Company added successfully!');
        },
        error: (err) => {
          console.error('Error adding company:', err);
          alert('Failed to add company!');
        }
      });
    } else {
      alert('Please fill all fields to add a company.');
    }
  }
}
