import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {equalTo} from "@angular/fire/database";
import {User} from "../models/users";

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

  registerUser(data: User) {
    this.db.database.ref('users').push(data)
    const newUserRef = this.db.list('users', ref => ref.orderByChild('passCode').equalTo(data.passCode))
    return newUserRef.valueChanges()
  }

  loginUser(passCode: string) {
    const ref = this.db.list('users', ref => ref.orderByChild('passCode').equalTo(passCode))
    return ref.valueChanges()
  }

  loginAdmin(login: string) {
    const ref = this.db.list('admins', ref => ref.orderByChild('login').equalTo(login))
    return ref.valueChanges()
  }
}
