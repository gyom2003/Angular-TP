import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCatComponent } from './question-cat.component';

describe('QuestionComponent', () => {
  let component: QuestionCatComponent;
  let fixture: ComponentFixture<QuestionCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionCatComponent]
    });
    fixture = TestBed.createComponent(QuestionCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
