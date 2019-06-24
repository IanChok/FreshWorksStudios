import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {

  constructor(private firestore: AngularFirestore) { }

  recordDuckCount(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('duckCount').add(data).then((res) => { }, (err) => reject(err));
      resolve();
    });
  }

  getDuckCount() {
    const collection = this.firestore.collection('duckCount');
    return collection.get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    });
  }
}
