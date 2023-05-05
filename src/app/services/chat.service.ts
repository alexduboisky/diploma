import { Injectable } from '@angular/core';
import {DatabaseService} from "./database.service";
import {AuthService} from "./auth.service";
import {Chat} from "../models/chat";
import {BehaviorSubject} from "rxjs";
import {v4 as uuidv4} from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  userId: string = ''
  userChat: BehaviorSubject<Chat> = new BehaviorSubject<Chat>(null)

  constructor(private db: DatabaseService) {
  }

  subscribeToChat(userId: string) {
    this.userId = userId
    this.db.getUserChat(userId).subscribe((chatList: Chat[]) => {
      const chat = chatList[0]
      if (!chat) return
      this.userChat.next(chat)
    })
  }


  createChat(userId?) {
    const data: Chat = {
      id: uuidv4(),
      userId: userId ? userId : this.userId,
      messages: []
    }
    return this.db.createChat(data)
  }

  sendMessageFromUser(text) {
    return this.db.sendMessageFromUser(text, this.userId)
  }

  sendMessageFromAdmin(text, userId) {
    return this.db.sendMessageFromAdmin(text, userId)
  }
}
