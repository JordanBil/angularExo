import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css']
})
export class ListFriendsComponent {
  Utilisateur: string = `Steven Cigale`;
  Age: number = 25;
  Status: string = `Offline`;
  Bio: string = 'Steven Cigale is a French Film producer, screenwriter and director. He is best known for his work in the 2000s and 2010s';
  passion: string[] = ['Volleyball', 'Gun', 'Guitare'];
  Xss: string = `<script>alert("Hello, XSS H4CK3D !")</script>`;
  Reputation: string = `Ringard`;
  ResultReputation: string = this.Reputation ? 'Ringard' : 'Cool';

  // Variables pour l'exercice
  saisieAmi: string = ''; // Stocke le texte de l'input
  amis: string[] = []; // Liste des amis ajoutés
  messageAmi: string = 'Aucun ami'; // Message après ajout

  // Capture l'input en temps réel
  onInputChange(event: Event) {
    this.saisieAmi = (event.target as HTMLInputElement).value;
  }

  // Ajoute un ami à la liste et vide l'input
  ajouterAmi(inputElement: HTMLInputElement) {
    if (this.saisieAmi.trim()) {
      this.amis.push(this.saisieAmi); // Ajoute à la liste
      this.messageAmi = `🎉 Votre ami ${this.saisieAmi} a été ajouté !`;
      this.saisieAmi = ''; // Réinitialise la variable
      inputElement.value = ''; // Réinitialise l'input visuellement
    } else {
      this.messageAmi = "Veuillez entrer un nom valide.";
    }
  }

  getAge(): number {
    return this.Age;
  }
}
