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

  constructor(private db: DatabaseService, public auth: AuthService) {}

  async ngOnInit() {
    await this.auth.updateUserData()
    this.db.getCourses().subscribe((data: Course[]) => {
      if (this.auth.logged) return this.processCourses(data)
      this.courses = data
    })
  }

  private processCourses(data: Course[]) {
    const coursesState = this.auth.User.getValue().coursesState || []
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
          this.finishiedCourses.push({ ...courseFromList , ...course})
          break
        }
        case CourseState.IN_PROGRES: {
          this.startedCourses.push({ ...courseFromList , ...course})
          break
        }
        default: this.newCourses.push(course)
      }
    })
  }
}
