import { Component, Input, OnInit } from '@angular/core';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  @Input() companyId: number;
  vacancies: any[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit() {
    if (this.companyId) {
      this.vacancyService.getVacancies(this.companyId).subscribe(data => {
        this.vacancies = data;
      });
    }
  }
}
