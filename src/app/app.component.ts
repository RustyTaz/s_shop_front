import { Component } from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";
import {MatDialog} from "@angular/material/dialog";
import {LoginPageComponent} from "./user-work/login-page/login-page.component";
import {CheckRoleService} from "./services/check-role.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 's-shop-front';
  jwt_token_role:string[];
  role:string="";



  constructor(private token: TokenStorageService, public dialog: MatDialog, private check_role: CheckRoleService) {
    localStorage.clear();
    this.jwt_token_role=token.getAuthorities();
    this.role=this.jwt_token_role[0];
    console.log(this.role)
    this.check_role.role$.subscribe((role)=>this.role=role);

  }
  openModalLogin(): void {

    const dialogRef = this.dialog.open(LoginPageComponent, {
      width: '350px',
      height: '320px'
    })
    dialogRef.afterClosed().subscribe();

  }

  ngOnDestroy(){

  }

  login(){}

  logout() {
    this.token.signOut();
  }
}
