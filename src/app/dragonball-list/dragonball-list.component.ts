import { Component } from '@angular/core';
import { DragonballApiService } from '../services/dragonball-api.service';
import { NgIf,NgFor } from '@angular/common';

interface Dragonball {
  id: number;
  name: string;
  image: string;
}


@Component({
  selector: 'app-dragonball-list',
  imports: [NgIf,NgFor],
  templateUrl: './dragonball-list.component.html',
  styleUrl: './dragonball-list.component.css',
  providers: [DragonballApiService]
})
export class DragonballListComponent {
  dragonball: Dragonball[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private dragonballService: DragonballApiService) {}

  //On execute dans ngOnit du composant pour charger la liste des pokemons dès le départ (lifeCycle hook)
  ngOnInit(): void {
    this.loadDragonball();
}

loadDragonball(): void {
  this.dragonballService
    .fetchDragonballList()
    .then((data) => {
       console.log(data);
       console.log(data.items);
      this.dragonball = data.items.map((dragonball: any) => (
        {
        id: dragonball.id,
        name: dragonball.name,
        image: dragonball.image,
      }));
      console.log(this.dragonball);

      this.isLoading = false;
    })
    .catch((error) => {
      this.errorMessage = error.message;
      this.isLoading = false;
    });
}}


