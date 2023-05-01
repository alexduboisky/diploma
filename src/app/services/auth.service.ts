import {Injectable} from '@angular/core';
import {DatabaseService} from "./database.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Admin, User} from "../models/users";
import {ChatService} from "./chat.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public User = new BehaviorSubject<User>(null);
  Admin = new BehaviorSubject<Admin>(null);

  logged: boolean = false;
  adminLogged: boolean = false;

  constructor(private db: DatabaseService, private chat: ChatService) {
    this.setUserFromLocalStorage()
    this.setAdminFromLocalStorage()

    this.db.updateUserData(this.User.getValue()?.passCode).subscribe((user: User[]) => {
      this.User.next(user[0])
    })

    this.User.subscribe((user: User) => {
      if (user) {
        this.chat.subscribeToChat(user.id)
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        localStorage.removeItem('user')
      }
      this.logged = !!user
    })

    this.Admin.subscribe((admin: Admin) => {
      if (admin) {
        localStorage.setItem('admin', JSON.stringify(admin))
      } else {
        localStorage.removeItem('admin')
      }
      this.adminLogged = !!admin
    })
  }

  setUserFromLocalStorage(): void {
    const user = localStorage.getItem('user')
    if (user) {
      this.User.next(JSON.parse(user))
    }
  }

  setAdminFromLocalStorage(): void {
    const admin = localStorage.getItem('admin')
    if (admin) {
      this.Admin.next(JSON.parse(admin))
    }
  }

  checkIsUserExist(passCode: string): Observable<any> {
    return this.db.checkIsUserExist(passCode)
  }

  registerUser(data: User): Observable<any> {
    return this.db.registerUser(data)
  }

  loginUser(passCode: string): Observable<any> {
    return this.db.loginUser(passCode)
  }

  loginAdmin(login: string): Observable<any> {
    return this.db.loginAdmin(login)
  }

  isLogged():boolean {
    return this.logged || this.adminLogged
  }

  setUser(userData: User): void {
    this.User.next(userData)
  }

  setAdmin(adminData: Admin): void {
    this.Admin.next(adminData)
  }

  logout(): void {
    this.User.next(null)
    this.Admin.next(null)
  }
}
