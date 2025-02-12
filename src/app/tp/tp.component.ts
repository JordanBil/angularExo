import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-tp',
  imports: [NgClass,NgStyle, NgIf, NgFor],
  templateUrl: './tp.component.html',
  styleUrl: './tp.component.css'
})
export class TPComponent implements OnInit {

  showDetails: boolean = false; 
  clickNbrTab: number[] = [];
  click: number = 0;

  toggleDetails() {

    this.showDetails = !this.showDetails; 
    this.clickNbrTab.push(this.clickNbrTab.length + 1);
    
  }


  ngOnInit() {
    
  }
}
