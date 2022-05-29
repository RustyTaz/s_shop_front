import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AdminModule} from "./admin/admin.module";
import {UserModule} from "./user/user.module";
import {UserWorkModule} from "./user-work/user-work.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./services/auth-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    UserWorkModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [httpInterceptorProviders,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
