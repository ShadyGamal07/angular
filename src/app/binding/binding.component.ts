import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  constructor() { }

  isDisplayed=true;

  isLogIn=false;
  fullname="Shady Gamal";



  great(){
    console.log("Welcome in Angolar");
  }
  Go(data:any){
    console.log(data);
  }

  fullname2:string="";

  ngOnInit(): void {
  }

}
