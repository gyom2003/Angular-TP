import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriesService } from "../../shared/services/categories.service";

@Component({
  selector: 'app-answer-cat',
  templateUrl: './answer-cat.component.html',
  styleUrls: ['./answer-cat.component.scss'],
  standalone: false
})
export class AnswerCatComponent {
  @Input() answers: any[] = [];
  @Input() questionId: number = 0;
  @Output() answerSelected = new EventEmitter();
  isQuizFinished = this.categoriesService.isQuizFinished;

  constructor(private categoriesService: CategoriesService) { }

  getAnswerLetter(j: number) {
    return String.fromCharCode(65 + j);
  }

  addAnswer(answer: string) {
    this.answerSelected.emit(answer);
  }

  isAnswerSelected(answer: string, id: number) {
    const isAnswered = this.categoriesService.playerAnswers.find((a) => a.questionId === id);
    if (!isAnswered) return false;
    return isAnswered.answer === answer;
  }
}
