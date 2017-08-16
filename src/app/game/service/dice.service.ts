import { Injectable } from '@angular/core';

@Injectable()
export class DiceService {

  diceValues: number[];
  rollCount: number;

  constructor() {
    this.diceValues = [1,1,1,1,1];
    this.resetRollCount();
  }

  public getDiceValues() {
    return this.diceValues;
  }

  public setDiceValueOne(value) {
    this.diceValues[0] = value;
  }

  public setDiceValueTwo(value) {
    this.diceValues[1] = value;
  }

  public setDiceValueThree(value) {
    this.diceValues[2] = value;
  }

  public setDiceValueFour(value) {
    this.diceValues[3] = value;
  }

  public setDiceValueFive(value) {
    this.diceValues[4] = value;
  }

  public resetRollCount() {
    this.rollCount = 0;
  }

  public addRoll() {
    this.rollCount++;
  }

  public getRollCount() {
    return this.rollCount;
  }
}
