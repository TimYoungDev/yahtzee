import { Injectable } from '@angular/core';
import {ScoreModal} from "./game/modal/score.modal";

@Injectable()
export class ScoreService {
  score: ScoreModal;

  constructor() {
    this.reset();
  }


  public reset() {
    this.score = new ScoreModal();
  }

  public setOnes(diceVals: number[]) {
    this.score.ones = this.getTotal(diceVals, 1);
  }
  public setTwos(diceVals: number[]) {
    this.score.twos = this.getTotal(diceVals, 2);
  }
  public setThrees(diceVals: number[]) {
    this.score.threes = this.getTotal(diceVals, 3);
  }
  public setFours(diceVals: number[]) {
    this.score.fours = this.getTotal(diceVals, 4);
  }
  public setFives(diceVals: number[]) {
    this.score.fives = this.getTotal(diceVals, 5);
  }
  public setSixes(diceVals: number[]) {
    this.score.sixes = this.getTotal(diceVals, 6);
  }
  public getTopTotal() {
    return  this.score.ones +
            this.score.twos +
            this.score.threes +
            this.score.fours +
            this.score.fives +
            this.score.sixes;
  }

  public setChance(diceVals) {
    this.validate(diceVals);

    let total = 0;
    let diceNumbers = this.decomposeDiceValues(diceVals);

    for (let i=0; i<diceNumbers.length; i++) {
      total += diceNumbers[i] * (i+1);
    }

    this.score.chance = total;
  }

  public setThreeOfKind(diceVals) {
    this.validate(diceVals);

    let threeKindFound = false;
    let total = 0;
    let diceNumbers = this.decomposeDiceValues(diceVals);

    for (let i=0; i<diceNumbers.length; i++) {
      total += diceNumbers[i] * (i+1);
      if (diceNumbers[i] >= 3) {
        threeKindFound = true;
      }
    }

    this.score.threeOfKind = threeKindFound ? total : 0;
  }

  public setFourOfKind(diceVals) {
    this.validate(diceVals);

    let fourKindFound = false;
    let total = 0;
    let diceNumbers = this.decomposeDiceValues(diceVals);

    for (let i=0; i<diceNumbers.length; i++) {
      total += diceNumbers[i] * (i+1);
      if (diceNumbers[i] >= 4) {
        fourKindFound = true;
      }
    }

    this.score.fourOfKind = fourKindFound ? total : 0;
  }

  public setYahtzee(diceVals) {
    this.validate(diceVals);

    let yahtzeeFound = false;
    let diceNumbers = this.decomposeDiceValues(diceVals);

    for (let i=0; i<diceNumbers.length; i++) {
      if (diceNumbers[i] >= 5) {
        yahtzeeFound = true;
        break;
      }
    }
    this.score.yahtzee = yahtzeeFound ? 50 : 0;
  }

  public setFullHouse(diceVals) {
    this.validate(diceVals);

    let twoKindFound = false;
    let threeKindFound = false;
    let diceNumbers = this.decomposeDiceValues(diceVals);

    for (let i=0; i<diceNumbers.length; i++) {
      if (diceNumbers[i] == 2) {
        twoKindFound = true;
      }
      if (diceNumbers[i] == 3) {
        threeKindFound = true;
      }
    }
    this.score.fullHouse = twoKindFound && threeKindFound ? 25 : 0;
  }

  public setSmallStraight(diceVals) {
    this.validate(diceVals);

    let diceNumbers = this.decomposeDiceValues(diceVals);

    // Must have a 3 & 4
    let middleFound = (diceNumbers[2] >= 1 && diceNumbers[3] >= 1);
    // If there's a 2 we must also have either a 1 or a 5
    let leftEndFound = (diceNumbers[1] >= 1 && (diceNumbers[0] >= 1 || diceNumbers[4] >= 1));
    // If there's a 5 we must also have either a 6 or a 2
    let rightEndFound = (diceNumbers[4] >= 1 && (diceNumbers[5] >= 1 || diceNumbers[1] >= 1));

    this.score.smallStraight = (middleFound && (leftEndFound || rightEndFound)) ? 30 : 0;
  }

  public setLargeStraight(diceVals) {
    this.validate(diceVals);

    let diceNumbers = this.decomposeDiceValues(diceVals);

    // Must have 2, 3, 4, 5
    let middleFound = (diceNumbers[1] >= 1 && diceNumbers[2] >= 1 && diceNumbers[3] >= 1 && diceNumbers[4] >= 1)
    // Can have either a 1 or 6 on the end
    let endFound = (diceNumbers[0] >=1 || diceNumbers[5] >= 1);

    this.score.largeStraight = (middleFound && endFound) ? 40 : 0;
  }

  public getBottomTotal() {
    return  this.score.threeOfKind +
            this.score.fourOfKind +
            this.score.fullHouse +
            this.score.smallStraight +
            this.score.largeStraight +
            this.score.yahtzee +
            this.score.chance;
  }

  private getTotal(diceVals: number[], targetNum: number) {
    this.validate(diceVals);
    let diceNumbers = this.decomposeDiceValues(diceVals);
    let total = diceNumbers[targetNum-1] * targetNum;
    return total;
  }
  private decomposeDiceValues(diceVals) {
    let diceNumbers = [0,0,0,0,0,0];
    for (let v of diceVals) {
      diceNumbers[0] += (+v == 1 ? 1:0); // 1's count
      diceNumbers[1] += (+v == 2 ? 1:0); // 2's count
      diceNumbers[2] += (+v == 3 ? 1:0); // 3's count
      diceNumbers[3] += (+v == 4 ? 1:0); // 4's count
      diceNumbers[4] += (+v == 5 ? 1:0); // 5's count
      diceNumbers[5] += (+v == 6 ? 1:0); // 6's count
    }
    return diceNumbers;
  }
  private validate(diceVals: number[]) {
    if (diceVals.length < 5) {
      throw 'diceVals length is less than required size: 5';
    }
  }
}
