import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.less']
})
export class CatalogPageComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Цена по возрастанию '},
    {value: 'pizza-1', viewValue: 'Цена по убыванию'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
