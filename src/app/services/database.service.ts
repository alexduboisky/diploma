import {Injectable, Injector} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {equalTo, update} from "@angular/fire/database";
import {User, UserCourseState} from "../models/users";
import {CourseState} from "./course.service";
import {AuthService} from "./auth.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {}

  uploadFile(file) {
    return new Promise<string>(resolve => {
      const uploadFile = this.storage.ref(`practices/${file.name}`).put(file)
      uploadFile.task.on('state_changed', () => {}, () => {},
        () =>  {
        uploadFile.task.snapshot.ref.getDownloadURL().then(downloadURL => resolve(downloadURL))
        })
    })
  }

  getCourses(): Observable<any[]> {
    const ref = this.db.list('courses')
    return ref.valueChanges()
  }

  getCourse(id: string): any {
    const ref = this.db.list('courses', ref => ref.orderByChild('id').equalTo(id))
    return ref.valueChanges()
  }

  getUsers(): Observable<any> {
    const ref = this.db.list('users')
    return ref.valueChanges()
  }

  restartCourseForUser(userId: string, courseId: string): any {
    return new Promise<void>(resolve => {
      const ref = this.db.database.ref('users').orderByChild('id').equalTo(userId)
      ref.once('value')
        .then(snapshot => {
          snapshot.forEach(childSnapshot => {
            const corseRef = childSnapshot.ref.child('coursesState').ref.orderByChild('id').equalTo(courseId)
            corseRef.once("value")
              .then(snap => {
                snap.forEach(childSnap => {
                  childSnap.ref.remove()
                  resolve()
                })
              })
          })
        })
    })
  }

  addCourseToUser(userId: string, courseId: string) {
    return new Promise<void>(resolve => {
      const data: UserCourseState = {
        id: courseId,
        status: CourseState.IN_PROGRES,
        activeStep: 'l1'
      }
      const ref = this.db.database.ref('users').orderByChild('id').equalTo(userId)
      ref.once('value')
        .then(snapshot => {
          snapshot.forEach(childSnapshot => {
            childSnapshot.child('coursesState').ref.push(data)
            resolve()
          })
        })
    })
  }

  updateUserInfo(data) {
    return new Promise<void>( resolve => {
      const ref = this.db.database.ref('users').orderByChild('id').equalTo(data.id)
      ref.once('value').then(snapshot => {
        snapshot.forEach(childSnapshot => {
            childSnapshot.ref.update(data)
              .then(() => resolve())
          })
        })
    })
  }

  updateCourseToUser(userId: string, courseId: string, activeStep: string, status: string = CourseState.IN_PROGRES, additionalData = {}) {
    return new Promise<void>(resolve => {
      const data: UserCourseState = {
        id: courseId,
        status,
        activeStep,
        ...additionalData
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
                  resolve()
                })
              })
          })
        })
    })
  }

  finishCourseToUser(userId: string, courseId: string) {
    return this.updateCourseToUser(userId, courseId, null, CourseState.DONE)
  }

  checkIsUserExist(passCode: string) {
    const newUserRef = this.db.list('users', ref => ref.orderByChild('passCode').equalTo(passCode))
    return newUserRef.valueChanges()
  }

  updateUserData(passCode:string = '') {
    const userRef = this.db.list('users', ref => ref.orderByChild('passCode').equalTo(passCode))
    return userRef.valueChanges()
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

  deleteUser(userId: string) {
    return new Promise<void>(resolve => {
      const ref = this.db.database.ref('users').orderByChild('id').equalTo(userId)
      ref.once('value')
        .then(snapshot => {
          snapshot.forEach(childSnapshot => {
            childSnapshot.ref.once("value")
              .then(snap => {
                snap.forEach(childSnap => {
                  childSnap.ref.remove()
                  resolve()
                })
              })
          })
        })
    })
  }

  loginAdmin(login: string) {
    const ref = this.db.list('admins', ref => ref.orderByChild('login').equalTo(login))
    return ref.valueChanges()
  }

  getUserChat(userId: string): Observable<any> {
    const ref = this.db.list('threads', ref => ref.orderByChild('userId').equalTo(userId))
    return ref.valueChanges()
  }

  getChats(): Observable<any> {
    const ref = this.db.list('threads')
    return ref.valueChanges()
  }

  createChat(data) {
    return new Promise<void>((resolve) => {
      this.db.database.ref('threads').push(data).then(() => resolve())
    })
  }

  sendMessageFromUser(text: string, userId: string) {
    return this.sendMessage(userId, { text, isAdmin: false })
  }

  sendMessageFromAdmin(text: string, userId: string) {
    return this.sendMessage(userId, { text, isAdmin: true })
  }

  sendMessage(userId: string, data) {
    return new Promise<void>((resolve) => {
      const ref = this.db.database.ref('threads').orderByChild('userId').equalTo(userId)
      ref.once('value')
        .then(snapshot => {
          snapshot.forEach(childSnapshot => {
            const date = new Date()
            childSnapshot.child('messages').ref.push({ ...data, timestamp: date.getTime()})
            resolve()
          })
        })
    })
  }

  getFeedbacks() {
    const ref = this.db.list('feedbacks')
    return ref.valueChanges()
  }

  sendFeedBack(data) {
    return new Promise<void>(resolve => {
      this.db.database.ref('feedbacks').push({ ...data, isAnswered: false }).then(() => resolve())
    })
  }

  updateFeedback(data) {
    return new Promise<void>( resolve => {
      const ref = this.db.database.ref('feedbacks').orderByChild('id').equalTo(data.id)
      ref.once('value').then(snapshot => {
        snapshot.forEach(childSnapshot => {
          childSnapshot.ref.update({ ...data, isAnswered: true })
            .then(() => resolve())
        })
      })
    })
  }
}
