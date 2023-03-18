import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store: AngularFirestore) { }


  getAll(): Observable<Product[]>{
    return this.store.collection('courses').valueChanges({ idField: 'id' }) as Observable<Product[]>;
  }

  addProduct(p : Product){
    this.store.collection('courses').add(p);
  }

  removeProduct(p : Product){
    this.store.collection('courses').doc(p.id).delete();
  }

  updateProduct(p : Product){
    this.store.collection('courses').doc(p.id).update(p);
  }

}
