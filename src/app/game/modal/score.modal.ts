
export class ScoreModal {

  constructor() {
    this.ones = 0;
    this.twos = 0;
    this.threes = 0;
    this.fours = 0;
    this.fives = 0;
    this.sixes = 0;

    this.threeOfKind = 0;
    this.fourOfKind = 0;
    this.smallStraight = 0;
    this.largeStraight = 0;
    this.fullHouse = 0;
    this.yahtzee = 0;
    this.chance = 0;
  }

  public ones:number;
  public twos:number;
  public threes:number;
  public fours:number;
  public fives:number;
  public sixes:number;

  public threeOfKind:number;
  public fourOfKind:number;
  public smallStraight:number;
  public largeStraight:number;
  public fullHouse:number;
  public yahtzee:number;
  public chance:number;
}
