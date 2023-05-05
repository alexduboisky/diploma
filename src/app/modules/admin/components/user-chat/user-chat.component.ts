import {Component} from '@angular/core';
import {User} from "../../../../models/users";
import {DatabaseService} from "../../../../services/database.service";
import {Chat} from "../../../../models/chat";
import {ChatService} from "../../../../services/chat.service";

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent {

  selectedUser: number = null
  userList: User[] = []
  processedUserList: User[] = []

  userMessage: string = ''
  messages = []
  isNewChat: boolean = true
  userId: string = ''
  searchInput: string;

  constructor(private db: DatabaseService, private chat: ChatService) {
    this.db.getUsers().subscribe(users => {
      this.userList = users
      this.processedUserList = this.userList
    })
  }

  getUserChat(id: string, index: number) {
    this.isNewChat = true
    this.selectedUser = index
    this.userId = id

    this.db.getUserChat(id).subscribe((chat: Chat[]) => {
      if (!chat.length) return

      this.isNewChat = false
      if (chat[0].messages) {
        this.messages = Object.values(chat[0].messages).reverse()
      }
    })
  }

  async sendMessage() {
    if (this.isNewChat) {
      await this.chat.createChat(this.userId)
    }
    await this.chat.sendMessageFromAdmin(this.userMessage, this.userId)
    this.userMessage = ''
  }


  searchUser() {
    if (!this.searchInput) {
      this.processedUserList = this.userList
    } else {
      this.processedUserList = this.userList.filter(user => user.name.includes(this.searchInput))
    }
  }
}
