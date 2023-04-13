import { Component } from '@angular/core';
import {DatabaseService} from "../../../../services/database.service";
import {Course} from "../../../../models/courses";

@Component({
  selector: 'app-courses-main',
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.scss']
})
export class MainCoursesComponent {

  courses: Course[] = []

  constructor(private db: DatabaseService) {
    this.db.getCourses().subscribe((data: Course[]) => {
      this.courses = data
    })
  }
}
