import {Component, Input} from '@angular/core';
import {message} from "../../../../models/chat";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message: message
  @Input() isAdmin: boolean

  constructor() {

  }

  createDate(timestamp: number): string {
    return new Date(timestamp).toLocaleString()
  }
}
