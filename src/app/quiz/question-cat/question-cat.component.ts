import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from "../../shared/services/categories.service";

@Component({
  selector: 'app-question-cat',
  templateUrl: './question-cat.component.html',
  styleUrls: ['./question-cat.component.scss'],
  standalone: false
})
export class QuestionCatComponent implements OnInit {
  questions: any[] = [];
  answers: any[] = [];
  loaded: boolean = false;

  constructor(private http: HttpClient, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/categorie').subscribe(data => {
      this.questions = data.questions;
      this.answers = data.answers;
      this.loaded = true;
    });
  }

  getAnswersForQuestion(questionId: number) {
    return this.answers.filter(a => a.questionId === questionId);
  }

  addAnswer(answer: string, questionId: number) {
    this.categoriesService.addAnswer(answer, questionId);
  }
}
