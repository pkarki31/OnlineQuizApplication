import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QuizerulesComponent } from './quizerules/quizerules.component';
import { AngularquestionComponent } from './angularquestion/angularquestion.component';
import { ChangeBgDirective } from './change-bg.directive';
import { HtmlquestionComponent } from './htmlquestion/htmlquestion.component';
import { JavascriptquestionComponent } from './javascriptquestion/javascriptquestion.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    QuizerulesComponent,
    AngularquestionComponent,
    ChangeBgDirective,
    HtmlquestionComponent,
    JavascriptquestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
