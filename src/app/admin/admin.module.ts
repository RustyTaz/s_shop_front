import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddUserPageComponent } from './add-user-page/add-user-page.component';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CompanyPageComponent } from './company-page/company-page.component';
import {MatCardModule} from "@angular/material/card";
import { AddCompanyModalComponent } from './add-company-modal/add-company-modal.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AdminPageComponent,
    AddUserPageComponent,
    AddProductPageComponent,
    UserListPageComponent,
    CompanyPageComponent,
    AddCompanyModalComponent,
  ],
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
