import { Component } from '@angular/core';
import { Composant21Component } from '../composant-2-1/composant-2-1.component';
import { Composant22Component } from '../composant-2-2/composant-2-2.component';
@Component({
  selector: 'app-composant-2',
  imports: [Composant21Component,Composant22Component],
  templateUrl: './composant-2.component.html',
  styleUrl: './composant-2.component.css'
})
export class Composant2Component {

}
