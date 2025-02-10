import { Component } from '@angular/core';
import { Composant31Component } from '../composant-3-1/composant-3-1.component';
import { Composant32Component } from '../composant-3-2/composant-3-2.component';
import { Composant33Component } from '../composant-3-3/composant-3-3.component';
@Component({
  selector: 'app-composant-3',
  imports: [Composant31Component, Composant32Component, Composant33Component],
  templateUrl: './composant-3.component.html',
  styleUrl: './composant-3.component.css'
})
export class Composant3Component {

}
