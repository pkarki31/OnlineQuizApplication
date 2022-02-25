import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-angularquestion',
  templateUrl: './angularquestion.component.html',
  styleUrls: ['./angularquestion.component.css']
})
export class AngularquestionComponent implements OnInit {


  public questionList: any = [];
  //which question user will attemting from the 10 question
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;
  mode="quiz";

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        console.log(res.questions);
        //whatever the question in question.json stored in questionList in the array form
        this.questionList = res.questions;
      })

  }
  nextQuestion() {
    this.currentQuestion++;

  }
  previousQuestion() {
    this.currentQuestion--;

  }
  lastQuestion()
  {
    this.currentQuestion=this.questionList.length-1;
  }
  answer(currentQno: number, option: any) {

    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();

    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();

      }, 1000);
      //  this.points = this.points+10;

    } else {
      setTimeout(() => {
        this.points -= 10;
        this.currentQuestion++;
        this.resetCounter();
        this.inCorrectAnswer++;
        this.getProgressPercent();
      }, 1000);
    }

  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;

  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";
  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }

  onSubmit() {
    // let answers = [];
    // this.quiz.questions.forEach((x) =>
    //   answers.push({
    //     quizId: this.quiz.id,
    //     questionId: x.id,
    //     answered: x.answered,
    //   })
    // );
  }
  review(){

  }
  isAnswered() {
    //  return this.questionList.options.find((x) => x.selected)
    //   ? 'Answered'
    //    : 'Not Answered';
  }

  isCorrect() {
 
  }


}
