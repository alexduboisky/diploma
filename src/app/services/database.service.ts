import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {equalTo, update} from "@angular/fire/database";
import {User, UserCourseState} from "../models/users";
import {CourseState} from "./course.service";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) {}

  getCourses(): Observable<any[]> {
    const ref = this.db.list('courses')
    return ref.valueChanges()
  }

  getCourse(id: string): any {
    const ref = this.db.list('courses', ref => ref.orderByChild('id').equalTo(id))
    return ref.valueChanges()
  }

  addCourseToUser(userId: string, courseId: string, activeStep: string) {
    const data: UserCourseState = {
      id: courseId,
      status: CourseState.IN_PROGRES,
      activeStep
    }
    const ref = this.db.database.ref('users').orderByChild('id').equalTo(userId)
    ref.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          childSnapshot.child('coursesState').ref.push(data)
        })
      })
  }

  updateCourseToUser(userId: string, courseId: string, activeStep: string, status: string = CourseState.IN_PROGRES) {
    const data: UserCourseState = {
      id: courseId,
      status,
      activeStep
    }
    const ref = this.db.database.ref('users').orderByChild('id').equalTo(userId)
    ref.once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const corseRef = childSnapshot.ref.child('coursesState').ref.orderByChild('id').equalTo(courseId)
          corseRef.once("value")
            .then(snap => {
              snap.forEach(childSnap => {
                childSnap.ref.update(data)
              })
            })
        })
      })
  }

  finishCourseToUser(userId: string, courseId: string) {
    this.updateCourseToUser(userId, courseId, null, CourseState.DONE)
  }

  checkIsUserExist(passCode: string) {
    const newUserRef = this.db.list('users', ref => ref.orderByChild('passCode').equalTo(passCode))
    return newUserRef.valueChanges()
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
