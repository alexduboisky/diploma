import {Component, Input} from '@angular/core';
import {Course} from "../../../../models/courses";

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

}
