import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {

  options = {hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    time: new FormControl(new Date().toLocaleString('en-US', this.options)),
    food: new FormControl(''),
    location: new FormControl(''),
    numberOfDucks: new FormControl(''),
    foodType: new FormControl(''),
    foodQuantity: new FormControl(''),
  });

  recordDuckCount(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('duckCount').add(data).then((res) => {}, (err) => reject(err));
    });
  }
}
