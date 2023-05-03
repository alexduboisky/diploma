import {Injectable} from '@angular/core';
import {DatabaseService} from "./database.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Admin, User} from "../models/users";
import {ChatService} from "./chat.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public User = new BehaviorSubject<User>(null);
  Admin = new BehaviorSubject<Admin>(null);

  logged: boolean = false;
  adminLogged: boolean = false;

  constructor(private db: DatabaseService, private chat: ChatService, private router: Router) {
    this.setUserFromLocalStorage()
    this.setAdminFromLocalStorage()

    this.User.subscribe((user: User) => {
      if (this.adminLogged) return
      if (user) {
        this.chat.subscribeToChat(user.id)
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        this.router.navigate([''])
        localStorage.removeItem('user')
      }
      this.logged = !!user
    })

    this.Admin.subscribe((admin: Admin) => {
      if (this.logged)
        debugger
      if (admin) {
        localStorage.setItem('admin', JSON.stringify(admin))
      } else {
        this.router.navigate([''])
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

  updateUserData() {
    return new Promise<void>(resolve => {
      this.db.updateUserData(this.User.getValue()?.passCode).subscribe((user: User[]) => {
        this.User.next(user[0]);
        resolve();
      });
    })
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
