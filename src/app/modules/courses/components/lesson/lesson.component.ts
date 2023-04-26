import {Component, Input} from '@angular/core';
import {DatabaseService} from "../../../../services/database.service";
import {Router} from "@angular/router";
import {Course, Lesson} from "../../../../models/courses";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {

  lesson: Lesson = {
    id: '',
    text: '',
    youtubeId: ''
  }
  constructor(private db: DatabaseService, private router: Router) {
    const url = this.router.url
    const splittedUrl = url.split('/').reverse()
    this.db.getCourse(splittedUrl[1]).subscribe((courses: Course[]) => {
      this.lesson = courses[0].lessons.find(lesson => lesson.id === splittedUrl[0])
    })
  }

  getYoutubeURL(id: string): string {
    return `https://www.youtube.com/embed/${id}`
  }
}
