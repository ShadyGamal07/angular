import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../Shared Classes and types/IProduct_Interface';
import { ICategory } from '../../Shared Classes and types/ICategory_Interface';
import { DiscountOffers } from '../../Shared Classes and types/DiscountOffers_Enum';
import { ProductServiceService } from 'src/app/services/product-service.service';


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
  Discount:DiscountOffers=DiscountOffers.stateThree;
  // Discount:DiscountOffers;
  ProductList:IProduct[];
  CategoryList:ICategory[];


  constructor(private productService:ProductServiceService) { 
    this.storeName="Shady Store"
    // this.storeLogo="../../../../images/1.jpg";
    this.storeLogo="../../../assets/1.jpg"
    this.clientName=""
    this.isPurshased=true
    // this.Discount=DiscountOffers.stateOne;
    this.ProductList=[
          {ID:1,Name : "SAMSUNG Galaxy A22 6.4″ 4GB RAM 128GB – Green" ,Quantity:2 , Price:3500 , Img:"../../../assets/2.jpg"},
          {ID:2,Name : "iPhone 13 Pro 256GB Sierra Blue" ,Quantity:2 , Price:22693 , Img:"../../../assets/3.jpg"},
          {ID:3,Name : "Xiaomi Redmi 10 Dual SIM Mobile- 6.53 Inch FHD, 64GB, 4GB RAM, 4G LTE - Pebble White" ,Quantity:2 , Price:3499 , Img:"../../../assets/4.jpg"},
          {ID:4,Name : "Oppo A55 4GB RAM, 64GB - RAINBOW BLUE" ,Quantity:2 , Price:3425 , Img:"../../../assets/5.jpg"}

    ]
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

  // ------------------  Pipes  -----------------------------
  




  renderValues(){

  }
  
  @Input() parentData:any;
  @Output() dataFromChild = new EventEmitter();


  

  send(){
    this.dataFromChild.emit("Hello Parent From Child");
  }

  printMsg(){
    console.log("Hello Parent iam executed");
  }



  productList:any;  
  ProductID:any;  

  ngOnInit(): void {
    this.productList=this.productService.GetAllProducts();
    this.ProductID=this.productService.GetProductById(1);

  }

}
