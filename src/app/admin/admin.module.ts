import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddUserPageComponent } from './add-user-page/add-user-page.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    AddUserPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
