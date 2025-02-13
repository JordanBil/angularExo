import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user!: { name: string; email: string; role: string };
  @Output() userUpdated = new EventEmitter<{ name: string; email: string; role: string }>();

  updatedUser = { ...this.user };

  submitForm() {
    console.log("Form submitted:", this.updatedUser);
    this.userUpdated.emit(this.updatedUser);
  }
}
