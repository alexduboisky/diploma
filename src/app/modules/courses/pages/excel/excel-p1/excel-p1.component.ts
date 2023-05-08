import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../../../../../services/database.service";
import {AuthService} from "../../../../../services/auth.service";
import {CourseState} from "../../../../../services/course.service";

@Component({
  selector: 'app-excel-p1',
  templateUrl: './excel-p1.component.html',
  styleUrls: ['./excel-p1.component.scss']
})
export class ExcelP1Component {

  fileToUpload: File | null = null;
  isFileUploaded: boolean = false

  constructor(private router: Router, private db: DatabaseService, private auth: AuthService) {
  }
  async prevLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c5', 'l4')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/l4'])
  }

  async openTest() {
    if (!this.isFileUploaded) return
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c5', 't1')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/t1'])
  }

  async handleFileInput(files: FileList) {
    const url = await this.db.uploadFile(files[0])
    this.isFileUploaded = true
    const data = {
      practiceUrl: url,
      isPracticeChecked: false
    }
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c5', 't1', CourseState.IN_PROGRES, data)
    this.openTest()
  }

}
