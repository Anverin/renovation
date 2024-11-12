import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  contactsForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^([А-ЯЁ][а-яё]+\s*){1,}$/)]],
    email: [''],
    message: ['']
  });

  get name() {
    return this.contactsForm.get('name');
  }

  get email() {
    return this.contactsForm.get('email');
  }

  get message() {
    return this.contactsForm.get('message');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
