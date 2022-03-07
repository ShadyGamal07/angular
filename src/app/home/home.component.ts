import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers_Enum';
import { ICategory } from '../Shared Classes and types/ICategory_Interface';
import { IProduct } from '../Shared Classes and types/IProduct_Interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  storeName:string
  storeLogo:string
  clientName:string
  isPurshased:boolean
  Discount:DiscountOffers=DiscountOffers.stateThree;
  // Discount:DiscountOffers;
  CategoryList:ICategory[];


  constructor(private productService:ProductServiceService) { 
    this.storeName="Shady Store"
    // this.storeLogo="../../../../images/1.jpg";
    this.storeLogo="../../../assets/1.jpg"
    this.clientName=""
    this.isPurshased=true
    // this.Discount=DiscountOffers.stateOne;
    
    // this.CategoryList={ID:15 , Name:"Category "};
    this.CategoryList=[
      { ID: 1, Name:"Category 1 "},
      { ID: 2, Name: "Category 2" },
      { ID: 3, Name: "Category 3" }
    ];
  
  }

  isNoDiscount:boolean = (this.Discount == "No Discount") ? true : false;

  IsPurshased=true;

  Go(data:any){
    console.log(data);
    
  }
  toggleShow(){
    this.IsPurshased = !this.IsPurshased;
  }

  



  ngOnInit(): void {

  }
  

}
