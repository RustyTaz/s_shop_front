import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {AuthService} from "../../services/auth.service";
import {LoginInfo} from "../../models/login-info";
import {CheckRoleService} from "../../services/check-role.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  loginInfo!: LoginInfo;
  hide: any;
  roles: string[] = [];

  constructor( private dialogRef: MatDialogRef<LoginPageComponent>,
               private fb: FormBuilder,private authService: AuthService,
               private tokenStorage: TokenStorageService,
               private check_role: CheckRoleService) {
    this._createForm()
  }

  private _createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl([], [Validators.required]),
      password: new FormControl([], [Validators.required]),
    })
  }
  ngOnInit(): void {
  }

  loginAdmin() {
    let {username, password} = this.loginForm.value;
    this.loginInfo = new LoginInfo(username,password);
    console.log("ddddddd"+username)
    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        console.log(data);
        console.log(data.token);
        console.log(data.username);
        console.log(data.roles);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.roles);
        this.roles = this.tokenStorage.getAuthorities();
        this.check_role.changeRole(this.roles[0]);
      },
      error => {
        console.log(error);
      }
    );

    this.dialogRef.close();
  }
}
