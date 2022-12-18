import { Component } from '@angular/core';
import {Product,TopSelling, TableRows, Employee} from './table-data';


@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html'
})
export class TableComponent {
  topSelling:Product[];

  trow:TableRows[];

  constructor() { 

    this.topSelling=[{
      image: 'assets/images/users/user1.jpg',
      uname: 'Hanna Gover',
      gmail: 'hgover@gmail.com',
      productName: 'Flexy React',
      status: 'danger',
      weeks: 35,
      budget: '95K'
  },
  {
      image: 'assets/images/users/user2.jpg',
      uname: 'Hanna Gover',
      gmail: 'hgover@gmail.com',
      productName: 'Landing pro React',
      status: 'info',
      weeks: 35,
      budget: '95K'
  }]

    this.trow=Employee;
  }
}
