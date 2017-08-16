import {Component, OnInit, ViewChild} from '@angular/core';
import {DiceService} from "../service/dice.service";

@Component({
  selector: 'app-diceboard',
  templateUrl: './diceboard.component.html',
  styleUrls: ['./diceboard.component.css']
})
export class DiceboardComponent implements OnInit {
  diceService: DiceService;
  diceCanRoll: boolean;

  constructor(diceService: DiceService) {
    this.diceService = diceService;
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

  public startNewTurn() {
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
