import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('addInput') addInputElement: ElementRef;
  title = 'courses-app';
  newproduct='';
  userWantAdd=false;
  products: Product[] | undefined;

  constructor(){
    this.products = [
      {
        "name":"tomates",
        "buy": false
      },
      {
        "name":"PQ",
        "buy": true
      },{
        "name":"pain",
        "buy": false
      },{
        "name":"biscuits chocolat",
        "buy": false
      },{
        "name":"jambon",
        "buy": true
      },
    ]
  }


  getOpacity(p:Product){
    if (p.buy){
      return "background: rgba(120, 120, 120, 0.7);"
    }
  }

  wantAdd(){
    this.userWantAdd=true;
    setTimeout(()=>{
      this.addInputElement.nativeElement.focus();
    },0);
  }

  addNewProduct(){
    console.log(this.newproduct)
    if(this.newproduct){
      this.products.push({
        "name":this.newproduct,
        "buy":false
      })
      this.userWantAdd=false;
      this.newproduct='';
    }
  }

  bought(p : Product){
    p.buy = true;
  }

  deleteProduct(p: Product){
    console.log(this.products.indexOf(p))
    this.products.splice(this.products.indexOf(p),1);
  }
}
