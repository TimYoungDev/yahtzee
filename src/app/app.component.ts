import {Component, ViewChild, OnInit } from '@angular/core';
import {DiceService} from "./dice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  diceService: DiceService;
  diceCanRoll: boolean;

  constructor(diceSvc:DiceService) {
    this.diceService = diceSvc;
    this.diceCanRoll = true;
  }

  ngOnInit() {
  }

  @ViewChild('dice1') dice1;
  @ViewChild('dice2') dice2;
  @ViewChild('dice3') dice3;
  @ViewChild('dice4') dice4;
  @ViewChild('dice5') dice5;

  public rollAll() {
    if (this.diceService.getRollCount() > 2) {
      return;
    }

    this.dice1.roll();
    this.dice2.roll();
    this.dice3.roll();
    this.dice4.roll();
    this.dice5.roll();
    this.diceService.addRoll();
    if (this.diceService.getRollCount() > 2) {
      this.diceCanRoll = false;
    }
  }

  public scoreCardSet(value) {
    this.diceService.resetRollCount();
    this.diceCanRoll = true;

    this.dice1.resetHold();
    this.dice2.resetHold();
    this.dice3.resetHold();
    this.dice4.resetHold();
    this.dice5.resetHold();

    this.rollAll();
  }
}
