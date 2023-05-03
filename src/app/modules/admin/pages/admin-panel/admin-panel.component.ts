import { Component } from '@angular/core';
import {DatabaseService} from "../../../../services/database.service";
import {User} from "../../../../models/users";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  active = 1;
  userList: User[] = []
  userLoaded: boolean = false

  constructor(private db: DatabaseService) {
    this.db.getUsers().subscribe(users => {
      this.userList = users
      this.userLoaded = true
    })
  }
}
