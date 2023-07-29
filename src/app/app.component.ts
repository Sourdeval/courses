import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Product } from './core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('addInput') addInputElement: ElementRef;
  @HostListener('document:keypress', ['$event']) handleKeyboardEvent(event: KeyboardEvent){
    if (event.key == 'Enter'){
      this.addNewProduct();
      this.wantAdd();
    }
  }
  title = 'courses-app';
  newproduct='';
  userWantAdd=false;
  products: Product[] | undefined;

  constructor(private readonly data: DataService){
    data.getAll().subscribe(d => {
      this.products = d;
    })
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
    if(this.newproduct){
      this.data.addProduct({
        "name": this.newproduct,
        "buy": false,
        "id": ''
      })
      this.userWantAdd=false;
      this.newproduct='';
    }
  }

  bought(p : Product){
    p.buy = true;
    this.data.updateProduct(p);
  }

  deleteProduct(p: Product){
    this.data.removeProduct(p);
  }
}
