import { Component } from '@angular/core';
import {DatabaseService} from "../../../../services/database.service";
import {User} from "../../../../models/users";
import {Course} from "../../../../models/courses";
import {CourseState} from "../../../../services/course.service";

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.scss']
})
export class PracticesComponent {

  practices: any[] = []

  constructor(private db: DatabaseService) {
    this.getPractices()
  }

  getPractices() {
    this.db.getUsers().subscribe(users => {
      this.db.getCourses().subscribe(courses => {
        const usersWithCourses = users.filter(user => user.coursesState)
        usersWithCourses.forEach(user => {
          const userCourses= Object.values(user.coursesState).filter((course: Course) => course.practiceUrl)
          userCourses.forEach((course: Course) => {
            const courseTitle = courses.find((el: Course) => el.id === course.id)?.title
            this.practices.push({userId: user.id, userName: user.name, course: { title: courseTitle, ...course }})
          })
        })
      })
    })
  }

  async checked(userId: string, course: any) {
    const data = {
      isPracticeChecked: true,
      practiceUrl: null
    }
    await this.db.updateCourseToUser(userId, course.id, null, CourseState.DONE, data)
    this.practices = this.practices.filter(el => el.course.id !== course.id)
  }
}
