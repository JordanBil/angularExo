import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, UserDetailsComponent, UserFormComponent],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  user = {
    name: 'Yassine',
    email: 'yass@zebi.dz',
    role: 'Dev en devenir'
  };

  updateUser(updatedUser: any) {
    this.user = updatedUser;
  }
}
