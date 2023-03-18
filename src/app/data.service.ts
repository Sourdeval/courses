import { Injectable, isDevMode } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  firebaseCollection = 'courses'
  constructor(private store: AngularFirestore) {
    if (!isDevMode()){
      this.firebaseCollection = 'courses-prod'
    }
  }


  getAll(): Observable<Product[]>{
    return this.store.collection(this.firebaseCollection).valueChanges({ idField: 'id' }) as Observable<Product[]>;
  }

  addProduct(p : Product){
    this.store.collection(this.firebaseCollection).add(p);
  }

  removeProduct(p : Product){
    this.store.collection(this.firebaseCollection).doc(p.id).delete();
  }

  updateProduct(p : Product){
    this.store.collection(this.firebaseCollection).doc(p.id).update(p);
  }

}
