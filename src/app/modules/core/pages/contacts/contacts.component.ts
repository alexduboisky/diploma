import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  form: FormGroup
  staticAlertClosed: boolean = true;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl(''),
    })
  }

  sendQuestion() {
    this.staticAlertClosed = false
    setTimeout(() => {
      this.staticAlertClosed = true
    }, 5000);
    this.form.reset()
  }
}
