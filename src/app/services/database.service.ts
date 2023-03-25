import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) {}

  getItems() {
    const ref = this.db.list('courses')
    return ref.valueChanges()
  }
}
