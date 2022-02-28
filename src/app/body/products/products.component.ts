import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  storeName:string
  storeLogo:string
  clientName:string
  isPurshased:boolean
  constructor() { 
    this.storeName="Shady Store name"
    // this.storeLogo="../../../../images/1.jpg";
    this.storeLogo="1.jpg"
    this.clientName="Shady client name"
    this.isPurshased=true
  }

  ngOnInit(): void {
  }

}
