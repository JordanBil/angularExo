import { Component } from '@angular/core';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ArticleElementComponent } from '../article-element/article-element.component';
import { NgFor } from '@angular/common';

// Interface pour typer les articles
interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}

@Component({
  selector: 'app-blog-control-center',
  imports: [NgFor, AddArticleComponent, ArticleElementComponent],
  templateUrl: './blog-control-center.component.html',
  styleUrls: ['./blog-control-center.component.css']
})
export class BlogControlCenterComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'article'
    },
    {
      id: 2,
      title: 'Mon deuxième article',
      content: 'Ceci est le contenu de mon deuxième article.',
      author: 'Auteur 2',
      date: new Date('2023-02-01'),
      type: 'brouillon'
    }
  ];

  // Gestion des articles ajoutés
  onArticleAdded(articleData: { title: string; content: string; author: string; date: Date; type: string }) {
    const newArticle: Article = {
      id: this.articles.length+1,
      title: articleData.title,
      content: articleData.content,
      author: 'Hector',
      date: new Date(),
      type: 'article'
    };
    this.articles.push(newArticle);
    console.log(this.articles)
  } 
  }

//   // Gestion des brouillons ajoutés
//   onBrouillonAdded(brouillonData: { title: string; content: string; author: string; date: Date; type: string }) {
//    //Ici logique qui contruit un objet brouillon et qui le rajoute au tableau
//   }
// }