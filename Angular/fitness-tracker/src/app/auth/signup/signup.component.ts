import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: Date | undefined;
  minDate: Date | undefined;

  constructor() { }

  ngOnInit() {
    this.maxDate = new Date();  //resuelve hoy
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.minDate = new Date();
    this.minDate.setFullYear(this.minDate.getFullYear() - 120);
  }

  onSubmit(form:NgForm) {
    console.log(form);
  }

}
