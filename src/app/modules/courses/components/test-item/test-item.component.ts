import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Answer, Test} from "../../../../models/courses";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss']
})
export class TestItemComponent {

  @Input() testItem: Test
  @Output() setAnswer = new EventEmitter<any>();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      answer: new FormControl(null, Validators.required)
    })
  }

  onAnswerChange() {
    this.setAnswer.emit({ id: this.testItem.id, ...this.form.controls['answer'].value})
  }
}
