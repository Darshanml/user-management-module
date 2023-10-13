// user.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;

  formData = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: ''
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z\s]*$/) // Only allows letters and spaces
        ]
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z\s]*$/) // Only allows letters and spaces
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  

  onSubmit() {
    if (!this.userForm.valid) {
      console.log('Invalid form');
      return;
    }

    // Handle form submission logic here
    console.log(this.formData);
    // You can send the form data to your backend or perform any other operations

    // Reset the form after submission
    this.userForm.reset();
  }
  

  get firstname() {
    return this.userForm.get('firstname');
  }

  get lastname() {
    return this.userForm.get('lastname');
  }
}
