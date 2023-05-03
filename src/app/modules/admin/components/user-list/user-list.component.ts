import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/users";
import {DatabaseService} from "../../../../services/database.service";
import {Course} from "../../../../models/courses";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  userList: User[] = []
  processedUserList: User[] = []
  searchInput: '';
  courses: Course[]
  isCoursesLoaded: boolean = false

  constructor(private db: DatabaseService) {
    this.db.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses
      this.isCoursesLoaded = true
    })
    this.db.getUsers().subscribe(users => {
      this.userList = users
      this.processedUserList = this.userList
    })
  }

  searchUser() {
    if (!this.searchInput) {
      this.processedUserList = this.userList
    } else {
      this.processedUserList = this.userList.filter(user => user.name.includes(this.searchInput))
    }
  }

  getUsers() {
    this.db.getUsers().subscribe(users => {
      this.searchInput = ''
      this.userList = users
      this.processedUserList = this.userList
    })
  }
}
