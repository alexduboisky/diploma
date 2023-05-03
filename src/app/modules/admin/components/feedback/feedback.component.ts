import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../../../../services/database.service";
import {Feedback} from "../../../../models/feedback";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  newFeedbacks: Feedback[] = []
  oldFeedbacks: Feedback[] = []
  constructor(private db: DatabaseService) {
  }

  ngOnInit() {
    this.db.getFeedbacks().subscribe((feedbacks: Feedback[]) => {
      this.oldFeedbacks = []
      this.newFeedbacks = []
      feedbacks.forEach((feedback: Feedback) => {
        if (feedback.isAnswered) {
          this.oldFeedbacks.push(feedback)
        } else {
          this.newFeedbacks.push(feedback)
        }
      })
    })
  }

  updateFeedbackState(feedback) {
    this.db.updateFeedback(feedback)
  }
}
