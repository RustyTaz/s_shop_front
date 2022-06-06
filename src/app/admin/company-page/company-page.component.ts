import { Component, OnInit } from '@angular/core';
import {AdminRequestService} from "../../services/admin-request.service";
import {Company} from "../../models/company";
import {MatDialog} from "@angular/material/dialog";
import {AddCompanyModalComponent} from "../add-company-modal/add-company-modal.component";

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.less']
})
export class CompanyPageComponent implements OnInit {

  companies: Company[]=[];
  constructor(private adminReq: AdminRequestService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.adminReq.getAllCompanies().subscribe(data => {

      this.companies = data;
      console.log(this.companies);
    });

  }

  refreshCompanies() {
    this.adminReq.getAllCompanies().subscribe(data => {

      this.companies = data;

    });
  }

  openModalCompanies(): void {
    const dialogRef = this.dialog.open(AddCompanyModalComponent, {
      width: '300px',
      height: '360px'
    })
    dialogRef.afterClosed().subscribe(()=>
      this.refreshCompanies()
    );
  }

}
