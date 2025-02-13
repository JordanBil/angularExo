import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est disponible globalement
})
export class DragonballApiService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  async fetchDragonballList(): Promise<any> {
    const response = await fetch(this.apiUrl);
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to fetch DragonBall list');
    }
    return response.json();
  }
}