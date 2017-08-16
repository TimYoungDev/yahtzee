import {Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('scorecard') scorecard;
  @ViewChild('diceboard') diceboard;

  constructor() { }

  ngOnInit() { }

  public scoreCardSet(value) {
    this.diceboard.startNewTurn();
  }

  public newGame() {
    this.scorecard.resetScoreCard();
    this.diceboard.startNewTurn();
  }
}
