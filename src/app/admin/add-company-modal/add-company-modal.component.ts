import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {MatDialogRef} from "@angular/material/dialog";
import {LoginInfo} from "../../models/login-info";
import {Company} from "../../models/company";
import {AdminRequestService} from "../../services/admin-request.service";

@Component({
  selector: 'app-add-company-modal',
  templateUrl: './add-company-modal.component.html',
  styleUrls: ['./add-company-modal.component.less']
})
export class AddCompanyModalComponent implements OnInit {
  addForm!: FormGroup;
  company!: Company;
  loginForm: any = {
    companyname: '',
    country: '',
    desc: ''
  }

  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<AddCompanyModalComponent>,
              private adminReq: AdminRequestService) {
    this._createForm()
  }

  private _createForm() {
    this.addForm = new FormGroup({
      companyname: new FormControl([], [Validators.required]),
      country: new FormControl([], [Validators.required]),
      desc: new FormControl([], [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  setCompany() {
    //let {companyname, country, desc} = this.addForm.value;

    console.log(this.loginForm);
    this.company = new Company(this.loginForm.companyname, this.loginForm.country,this.loginForm.desc);
    console.log(this.company);
    this.adminReq.createCompany(this.company);
    this.dialogRef.close();

  }

}
