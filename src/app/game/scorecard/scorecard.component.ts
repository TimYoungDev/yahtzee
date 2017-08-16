import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ScoreService} from "../service/score.service";
import {DiceService} from "../service/dice.service";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  @Output()
  scoreCardSet = new EventEmitter<boolean>();

  private diceService;
  private scoreService;

  constructor(diceService: DiceService, scoreService:ScoreService) {
    this.diceService = diceService;
    this.scoreService = scoreService;
  }

  ngOnInit() { }

  public resetScoreCard() {
    this.scoreService.reset();
  }

  setControlScore(event) {
    let diceValues = this.diceService.getDiceValues();

    switch (event.currentTarget.id) {
      case 'inputOnes': this.scoreService.setOnes(diceValues); break;
      case 'inputTwos': this.scoreService.setTwos(diceValues); break;
      case 'inputThrees': this.scoreService.setThrees(diceValues); break;
      case 'inputFours': this.scoreService.setFours(diceValues); break;
      case 'inputFives': this.scoreService.setFives(diceValues); break;
      case 'inputSixes': this.scoreService.setSixes(diceValues); break;
      case 'inputThreeKind': this.scoreService.setThreeOfKind(diceValues); break;
      case 'inputFourKind': this.scoreService.setFourOfKind(diceValues); break;
      case 'inputFullHouse': this.scoreService.setFullHouse(diceValues); break;
      case 'inputSmStraight': this.scoreService.setSmallStraight(diceValues); break;
      case 'inputLgStraight': this.scoreService.setLargeStraight(diceValues); break;
      case 'inputYahtzee': this.scoreService.setYahtzee(diceValues); break;
      case 'inputChance': this.scoreService.setChance(diceValues); break;
    }

    this.scoreCardSet.emit(true);
  }
}
