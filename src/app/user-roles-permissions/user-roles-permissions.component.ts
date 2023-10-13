import { Component } from '@angular/core';

@Component({
  selector: 'app-user-roles-permissions',
  templateUrl: './user-roles-permissions.component.html',
  styleUrls: ['./user-roles-permissions.component.css']
})
export class UserRolesPermissionsComponent {
  username: string = '';
  role: string = 'guest';
  permissions: any = {
    create: false,
    read: false,
    update: false,
    delete: false
  };
  successMessage: string = '';
  errorMessage: string = '';

  addUser() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.username && this.role) {
      // Simulating an API call to save the user and permissions
      setTimeout(() => {
        this.successMessage = 'User added successfully!';
        this.username = '';
        this.role = 'guest';
        this.resetPermissions();
      }, 1000);
    } else {
      this.errorMessage = 'Error: Please fill in all the fields.';
    }
  }

  togglePermissions() {
    if (this.role !== 'admin') {
      this.resetPermissions();
    }
  }

  resetPermissions() {
    this.permissions = {
      create: false,
      read: false,
      update: false,
      delete: false
    };
  }
}
