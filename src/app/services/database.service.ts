import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {equalTo} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) {}

  getCourses(): Observable<any[]> {
    const ref = this.db.list('courses')
    return ref.valueChanges()
  }

  getCourse(id: number): any {
    const ref = this.db.list('courses', ref => ref.orderByChild('id').equalTo(id))
    return ref.valueChanges()
  }
}
