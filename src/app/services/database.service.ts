import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {Course} from "../models/courses";


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) {}

  getCourses(): Observable<Course[]> {
    const ref = this.db.list('courses')
    // @ts-ignore
    return ref.valueChanges()
  }
}
