import {Component, EventEmitter, Output} from '@angular/core';
import {Answer, Course, Test} from "../../../../models/courses";
import {DatabaseService} from "../../../../services/database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  tests: Test[] = []
  userAnswers: any[] = []
  correctAnswers: Answer[] = []

  @Output() isTestPassed = new EventEmitter<boolean>();
  constructor(private db: DatabaseService, private router: Router) {
    const url = this.router.url
    const splittedUrl = url.split('/').reverse()
    this.db.getCourse(splittedUrl[1]).subscribe((courses: Course[]) => {
      this.tests = courses[0].tests
      this.correctAnswers = this.getCorrectAnswers(this.tests)
    })
  }

  getAnswer($event) {
    const isAnswerExist = this.userAnswers.find(answer => answer.id === $event.id)
    if (isAnswerExist) {
      this.userAnswers = this.userAnswers.map(answer => answer.id === $event.id ? $event : answer)
    } else {
      this.userAnswers.push($event)
    }
    this.isTestPassed.emit(this.getIsAllAnswered())
  }

  getCorrectAnswers(tests: Test[]): Answer[] {
    return tests.reduce((acc, test) => {
      acc.push(test.answers.find(answer => answer.isCorrect))
      return acc
    }, [])
  }

  getIsAllAnswered(): boolean {
    return this.userAnswers.filter(answer => answer.isCorrect).length === this.correctAnswers.length
  }
}
