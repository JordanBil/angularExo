import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DataBindingComponent {
  // Variable liée à l'input
  userInput: string = '';

  // Méthode pour reset l'input
  resetInput() {
    this.userInput = '';
  }
}
