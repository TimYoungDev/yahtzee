import {Component, ViewChild} from '@angular/core';
import {DiceService} from "./dice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diceService: DiceService;

  constructor(diceSvc:DiceService) {
    this.diceService = diceSvc;
  }

  @ViewChild('dice1') dice1;
  @ViewChild('dice2') dice2;
  @ViewChild('dice3') dice3;
  @ViewChild('dice4') dice4;
  @ViewChild('dice5') dice5;

  public rollAll() {
    this.dice1.roll();
    this.dice2.roll();
    this.dice3.roll();
    this.dice4.roll();
    this.dice5.roll();
  }
}
