import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  companies: any[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }
}
