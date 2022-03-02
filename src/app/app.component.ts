import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './body/products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  msg = "Hi from parent";

  dataFromChild="";
  
  
  constructor(){}
  @ViewChild(ProductsComponent)childx!: ProductsComponent;

  ngAfterViewInit(): void {
    this.childx.printMsg();
  }

  title = 'first_project';
}
