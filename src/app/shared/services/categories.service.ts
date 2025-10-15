import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
    categories_ref: any[] = [];
    selectedCategory: string = '';
    playerAnswers: {questionId: number; answer: string}[] = [];
    score = 0;
    isQuizFinished = false;
    playerName: string = '';

    setSelectedCategory(category: string) {
        this.selectedCategory = category;
    }

    constructor(private http: HttpClient) {}
    
    checkAnswers() {
    this.score = 0;
    for (let i = 0; i < this.playerAnswers.length; i++) {
      const question = this.categories_ref.find((q) => q.id === this.playerAnswers[i].questionId);
      if (!question) continue;
      for (let j = 0; j < question.answers.length; j++) {
        const currentAnswer = question.answers[j];
        if (currentAnswer?.isCorrect && this.playerAnswers[i].answer === currentAnswer.answerLabel) {
          this.score += 1;
          break;
        }
      }
    }
    this.isQuizFinished = true;
  }

   addAnswer(answer: string, questionId: number) {
    const isAnswered = this.playerAnswers.find((a) => a.questionId === questionId);
    if (isAnswered) {
      isAnswered.answer = answer;
      return;
    }
    this.playerAnswers.push({questionId, answer});
  }

  
  getCategoriesContent(category: string) {
    return this.http.get(`http://localhost:3000/questions?category=${category}`).subscribe((questions: any) => {
        this.categories_ref = questions;
        console.log('Questions chargées:', questions);

         for (const question of questions) {
        this.http.get(`http://localhost:3000/answers?questionId=${question.id}`).subscribe((answers: any) => {
          this.categories_ref.push({
              id: question.id,
              question: question.questionLabel,
              answers
          });
        });
      }
    });
  }

   resetCategories() {
    this.categories_ref = [];
    this.playerAnswers = [];
    this.score = 0;
    this.isQuizFinished = false;
  }
    
}