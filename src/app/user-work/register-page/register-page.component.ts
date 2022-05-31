import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginInfo} from "../../models/login-info";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {CheckRoleService} from "../../services/check-role.service";
import {SignupInfo} from "../../models/signup-info";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.less']
})
export class RegisterPageComponent implements OnInit {

  loginForm!: FormGroup;
  loginInfo!: SignupInfo;
  hide: any;
  roles: string[] = [];

  constructor( private dialogRef: MatDialogRef<RegisterPageComponent>,
               private fb: FormBuilder,private authService: AuthService,
               private tokenStorage: TokenStorageService,
               private check_role: CheckRoleService) {
    this._createForm()
  }

  private _createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl([], [Validators.required]),
      password: new FormControl([], [Validators.required]),
      email : new FormControl([], [Validators.required, Validators.email])
    })
  }
  ngOnInit(): void {
  }


  singUpUser() {
    let {username, password, email} = this.loginForm.value;
    this.loginInfo = new SignupInfo(username,password,email);
    this.authService.signUp(this.loginInfo).subscribe(
      data => {
        console.log(data);
        this.check_role.changeRole(this.roles[0]);
      },
      error => {
        console.log(error);
      }
    );
    this.dialogRef.close();
  }

}
