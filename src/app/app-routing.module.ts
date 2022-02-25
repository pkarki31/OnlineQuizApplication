import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularquestionComponent } from './angularquestion/angularquestion.component';
import { HtmlquestionComponent } from './htmlquestion/htmlquestion.component';
import { JavascriptquestionComponent } from './javascriptquestion/javascriptquestion.component';
import { QuestionComponent } from './question/question.component';
import { QuizerulesComponent } from './quizerules/quizerules.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent},
  {path:"quizerules", component:QuizerulesComponent},
  {path:"angularquestion", component:AngularquestionComponent},
  {path:"htmlquestion", component:HtmlquestionComponent},
  {path:"javascriptquestion", component:JavascriptquestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
