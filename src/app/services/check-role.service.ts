import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckRoleService {
  public role$ = new Subject<string>();
  public changeRole(role: string) {
    this.role$.next(role);
  }
  constructor() { }
}
