import { Component } from '@angular/core';
import {DatabaseService} from "./services/database.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diploma';

  constructor(private db: DatabaseService) {
    this.db.getItems().subscribe(data => {
      console.log(data)
    })
  }
}
