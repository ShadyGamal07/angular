import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct_Interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  ProductList:Array<IProduct>=[
          {ID:1,Name : "SAMSUNG Galaxy A22 6.4″ 4GB RAM 128GB – Green" ,Quantity:2 , Price:3500 , Img:"../../../assets/2.jpg"},
          {ID:2,Name : "iPhone 13 Pro 256GB Sierra Blue" ,Quantity:2 , Price:22693 , Img:"../../../assets/3.jpg"},
          {ID:3,Name : "Xiaomi Redmi 10 Dual SIM Mobile- 6.53 Inch FHD, 64GB, 4GB RAM, 4G LTE - Pebble White" ,Quantity:2 , Price:3499 , Img:"../../../assets/4.jpg"},
          {ID:4,Name : "Oppo A55 4GB RAM, 64GB - RAINBOW BLUE" ,Quantity:2 , Price:3425 , Img:"../../../assets/5.jpg"}
  ];


  GetAllProducts(){
    return this.ProductList;
  }

  ProductListID!:any;

  GetProductById(id:any) {

    if(typeof id != 'number')
    {
      return null;
    }
    else{
      this.ProductList.filter((e)=>{
        if(e.ID===id){
         this.ProductListID=e;
        }
      });
      return this.ProductListID;
    }



  }



}
