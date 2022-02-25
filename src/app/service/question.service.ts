import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  //method to call json
  getQuestionJson() {
    return this.http.get<any>("assets/questionAngular.json");
  }
  getQuestionahtmlJson() {
    return this.http.get<any>("assets/questionHtml.json");

  }
  getQuestionajavascriptJson() {
    return this.http.get<any>("assets/questionJs.json");

  }


}
