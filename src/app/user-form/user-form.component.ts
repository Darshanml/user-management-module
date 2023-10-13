import { Component } from '@angular/core';

interface User {
  permissions: {
    [key: string]: boolean;
  };
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = {
    permissions: {}
  };

  users: User[] = [];

  permissions: string[] = ['Create', 'Read', 'Update', 'Delete', 'Sharath', 'Darshan'];

  submitForm() {
    this.users.push({ ...this.user });
    this.user = {
      permissions: {}
    };
  }
}
