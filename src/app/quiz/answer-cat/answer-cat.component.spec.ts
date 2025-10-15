import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCatComponent } from './answer-cat.component';

describe('AnswerComponent', () => {
  let component: AnswerCatComponent;
  let fixture: ComponentFixture<AnswerCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerCatComponent]
    });
    fixture = TestBed.createComponent(AnswerCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
