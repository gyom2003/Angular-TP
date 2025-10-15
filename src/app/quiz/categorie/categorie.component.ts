import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent implements OnInit {
  categories: string[] = ['HTML', 'CSS', 'Angular'];
  selectedCategory: string | null = null;

  constructor(private router: Router, private categorieService: CategoriesService) { }

  ngOnInit(): void {
    this.categorieService.resetCategories();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorieService.setSelectedCategory(category);
    this.categorieService.getCategoriesContent(category);
    this.categorieService.getCategoriesContent(category);
    //this.router.navigate(['/quiz']);
  }


}
