import {Component, Input} from '@angular/core';
import {User} from "../../../../models/users";

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent {

  @Input() userList: User[] = []
}
