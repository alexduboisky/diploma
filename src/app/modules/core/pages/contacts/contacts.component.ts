import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DatabaseService} from "../../../../services/database.service";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  form: FormGroup
  staticAlertClosed: boolean = true;

  constructor(private db: DatabaseService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl(''),
    })
  }

  async sendQuestion() {
    const data = {
      id: uuidv4(),
      sender: this.form.controls['name'].value,
      contact: this.form.controls['email'].value,
      message: this.form.controls['message'].value
    }
    await this.db.sendFeedBack(data)
    this.staticAlertClosed = false
    setTimeout(() => {
      this.staticAlertClosed = true
    }, 5000);
    this.form.reset()
  }
}
