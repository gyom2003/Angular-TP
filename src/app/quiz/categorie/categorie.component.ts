import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent {

  constructor(private router: Router) { }

  categories = [{id: 1, name: 'HTML'},{id: 2, name: 'CSS'},{id: 3, name: 'Java'},]

  //  goToCategorieQuiz() {
  //   // this.router.navigate(['/quiz', this.playerName]);
  //   this.router.navigate(['/categories', this.Cate]);
  // }


}
