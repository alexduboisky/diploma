import {Component, Input} from '@angular/core';
import {Course} from "../../../../models/courses";
import {DatabaseService} from "../../../../services/database.service";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  @Input() course: Course = {
    id: 0,
    title: '',
    description: '',
    image: '',
  }

  constructor(private db: DatabaseService, public authService: AuthService) {}

  startCourse(id: number) {
    this.db.getCourse(id).subscribe((data: Course[]) => {
      console.log(data)
    })
  }
}
