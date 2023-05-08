import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../../../../services/database.service";
import {Course} from "../../../../models/courses";
import {AuthService} from "../../../../services/auth.service";
import {CourseState} from "../../../../services/course.service";
import {User} from "../../../../models/users";

@Component({
  selector: 'app-courses-main',
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.scss']
})
export class MainCoursesComponent implements OnInit{

  courses: Course[] = []
  newCourses: Course[] = []
  startedCourses: Course[] = []
  finishiedCourses: Course[] = []

  courseState = CourseState
  user: User

  constructor(private db: DatabaseService, public auth: AuthService) {}

  async ngOnInit() {
    this.auth.User.subscribe(user => {
      this.user = user
      this.db.getCourses().subscribe((data: Course[]) => {
        if (this.auth.logged) {
          this.processCourses(data)
          return
        }
        this.courses = data
      })
    })
  }

  private async processCourses(data: Course[]) {
    this.startedCourses = []
    this.finishiedCourses = []
    this.newCourses = []
    const coursesState = this.user.coursesState || []
    const userCourseStates = Object.values(coursesState)
    data.forEach(course => {
      const courseFromList = userCourseStates.find(el => el.id === course.id)
      if (!courseFromList) {
        this.newCourses.push(course)
        return
      }
      switch (courseFromList.status) {
        case CourseState.NEW: {
          this.newCourses.push(course)
          break
        }
        case CourseState.DONE: {
          this.finishiedCourses.push({...courseFromList, ...course})
          break
        }
        case CourseState.IN_PROGRES: {
          this.startedCourses.push({...courseFromList, ...course})
          break
        }
        default:
          this.newCourses.push(course)
      }
    })
  }
}
