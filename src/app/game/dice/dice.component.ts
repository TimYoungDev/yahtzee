import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  @Output()
  value = new EventEmitter<number>();

  diceValue: number;
  diceImage: string;
  holdDice: boolean;

  constructor() {
  }

  ngOnInit() {
    this.diceValue = 1;
    this.diceImage = 'assets/img/dice_1.png';
    this.holdDice = false;
  }

  public getValue() {
    return this.diceValue;
  }

  public roll() {
    if (this.holdDice) {
      return;
    }

    this.diceValue = Math.floor(Math.random() * 6) + 1;
    this.diceImage = `assets/img/dice_${this.diceValue}.png`;
    this.value.emit(this.diceValue);
  }

  public hold() {
    this.holdDice = !this.holdDice;
  }
}
