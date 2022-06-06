import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'client', weight: 'client@gmail.com', symbol: 'client'},
  {position: 2, name: 'admin', weight: 'admin@gmail.com', symbol: 'admin'},
  {position: 3, name: 'test', weight: 'test@gmail.com', symbol: 'client'},
  {position: 4, name: 'test2', weight: 'test2@gmail.com', symbol: 'client'},
];

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.less']
})
export class UserListPageComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'weight', 'symbol','position'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
