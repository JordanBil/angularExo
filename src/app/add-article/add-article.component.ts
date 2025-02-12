import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  title: string = '';
  content: string = '';

  @Output() articleCreated = new EventEmitter<{ title: string; content: string; author: string; date: Date; type: string }>();
  //@Output() brouillonCreated = new EventEmitter<{ title: string; content: string; author: string; date: Date; type: string }>();

  ajouterArticle() {
    this.articleCreated.emit(
      {
        title: this.title,
        content: this.content,
        author: "moi",
        date: new Date('2023-01-01'),
        type: "article"
      });
      this.resetForm();
  }
  

  // ajouterBrouillon() {
  //   const newBrouillon = { title: this.title, content: this.content };
  //   this.brouillonCreated.emit(newBrouillon);
  //   this.resetForm();
  // }

  resetForm() {
    this.title = '';
    this.content = '';
  }
}
