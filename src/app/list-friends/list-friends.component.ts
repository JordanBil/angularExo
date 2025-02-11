import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent,NgIf,NgFor],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
 listfriends:boolean =false;

//  constructor(){
//   setTimeout(()=>{
//     this.listfriends=true;},3000);
//   }
dataInput:string = 'Aucun ami';
 capterEvent($event:any){
  this.dataInput=$event.target.value;
}

/*   
Version avec HTMLInputElement :

 capterEvent($event:HTMLInputElement){
  this.dataInput=$event.value;
}

*/

message:boolean=true;

 ajouterAmi(){
//   this.message ="Utilisateur "+ this.dataInput +" ajouté avec succès"
this.message=false;
  return "Utilisateur "+ this.dataInput +" ajouté avec succès";
 }

// Exo 6: NgFor (List Rendering)
 listFriendsTab: { name: string; age: number; email: string }[] = [
  { name: 'Alice', age: 30, email: 'alice@example.com' },
  { name: 'Bob', age: 25, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' }
];

 }

 