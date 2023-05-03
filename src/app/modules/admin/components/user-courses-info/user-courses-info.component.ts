import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User, UserCourseState} from "../../../../models/users";
import {CourseState} from "../../../../services/course.service";
import {Course} from "../../../../models/courses";
import {DatabaseService} from "../../../../services/database.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  ChangePasscodeModalComponent
} from "../../../../components/change-passcode-modal/change-passcode-modal.component";

@Component({
  selector: 'app-user-courses-info',
  templateUrl: './user-courses-info.component.html',
  styleUrls: ['./user-courses-info.component.scss']
})
export class UserCoursesInfoComponent implements OnInit {

  @Input() user: User
  @Input() courses: Course[]

  @Output() deleteUserEvent = new EventEmitter<void>()

  finishedCourses: string[] = []
  startedCourses: string[] = []

  constructor(private db: DatabaseService, private modal: NgbModal) {
  }

  ngOnInit() {
    if (this.user.coursesState) {
      const userCourses = Object.values(this.user.coursesState)
      userCourses.forEach(userCourse => {
        const courseTitle = this.courses.find(course => course.id === userCourse.id)?.title
        if (userCourse.status === CourseState.DONE) {
          this.finishedCourses.push(courseTitle)
          return
        }
        if (userCourse.status === CourseState.IN_PROGRES) {
          this.startedCourses.push(courseTitle)
          return
        }
      })
    }
  }

  async deleteUser() {
    await this.db.deleteUser(this.user.id)
    this.deleteUserEvent.emit()
  }

  changePassword() {
    const modalRef = this.modal.open(ChangePasscodeModalComponent)
    modalRef.componentInstance.user = this.user
  }
}
