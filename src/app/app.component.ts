import { Component } from '@angular/core';
import { Product } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-app';

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
}
