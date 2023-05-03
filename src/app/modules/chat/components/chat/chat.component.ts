import {Component, EventEmitter, Output} from '@angular/core';
import {ChatService} from "../../../../services/chat.service";
import {DatabaseService} from "../../../../services/database.service";
import {AuthService} from "../../../../services/auth.service";
import {Chat} from "../../../../models/chat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Output() closeChatEvent = new EventEmitter<void>()

  userMessage: string = ''
  messages = []
  isNewChat: boolean = true

  constructor(private chat: ChatService, private db: DatabaseService) {
    this.chat.userChat.subscribe((chat: Chat) => {
      if (!chat) return

      this.isNewChat = false
      if (chat.messages) {
        this.messages = Object.values(chat.messages).reverse()
      }
    })
  }
  closeChat() {
    this.closeChatEvent.emit()
  }

  async sendMessage() {
    if (this.isNewChat) {
      await this.chat.createChat()
    }
    await this.chat.sendMessageFromUser(this.userMessage)
    this.userMessage = ''
  }
}
