import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScorecardComponent } from './game/scorecard/scorecard.component';
import { AlertModule } from 'ngx-bootstrap';
import { DiceComponent } from './game/dice/dice.component';
import {ScoreService} from "./score.service";
import {DiceService} from "./dice.service";

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [DiceService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
