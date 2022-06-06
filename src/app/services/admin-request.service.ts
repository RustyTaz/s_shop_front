import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class AdminRequestService {

  private urlReq = 'http://localhost:8080/api/test/companies';
  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Company[]>
  {
    return this.http.get<Company[]>(this.urlReq+"/all");
  }


  getOneCompany(id: number): Observable<Company> {
    return this.http.get<Company>(this.urlReq + id);
  }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>('http://localhost:8080/api/test/companies', company);
  }



  deleteCompany(id: number) {
    return this.http.delete(this.urlReq + id)
  }
}

