import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/companies/');
  }
}
