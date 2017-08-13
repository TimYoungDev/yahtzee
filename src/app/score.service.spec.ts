import { TestBed, inject } from '@angular/core/testing';

import { ScoreService } from './score.service';

describe('ScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreService]
    });
  });

  it('should set the ones score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,1,1, 2,3];
    service.setOnes(diceVals);
    expect(service.score.ones).toBe(3);
  }));
  it('should set the twos score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,1,2, 2,3];
    service.setTwos(diceVals);
    expect(service.score.twos).toBe(4);
  }));
  it('should set the threes score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,1,3, 2,3];
    service.setThrees(diceVals);
    expect(service.score.threes).toBe(6);
  }));
  it('should set the fours score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [4,4,4, 2,3];
    service.setFours(diceVals);
    expect(service.score.fours).toBe(12);
  }));
  it('should set the five score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,5,1, 5,3];
    service.setFives(diceVals);
    expect(service.score.fives).toBe(10);
  }));
  it('should set the sixes score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,6,1, 2,6];
    service.setSixes(diceVals);
    expect(service.score.sixes).toBe(12);
  }));
  it('should set the chance score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,2,3,4,5];
    service.setChance(diceVals);
    expect(service.score.chance).toBe(15);
  }));
  it('should set the 3-of-kind score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,2,3,4,5];
    service.setThreeOfKind(diceVals);
    expect(service.score.threeOfKind).toBe(0);
    diceVals = [2,2,2,4,5];
    service.setThreeOfKind(diceVals);
    expect(service.score.threeOfKind).toBe(15);
  }));
  it('should set the 4-of-kind score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,2,3,4,5];
    service.setFourOfKind(diceVals);
    expect(service.score.fourOfKind).toBe(0);
    diceVals = [2,2,2,2,5];
    service.setFourOfKind(diceVals);
    expect(service.score.fourOfKind).toBe(13);
  }));
  it('should set the yahtzee score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,1,1, 2,3];
    service.setYahtzee(diceVals);
    expect(service.score.yahtzee).toBe(0);
    diceVals = [1,1,1,1,1];
    service.setYahtzee(diceVals);
    expect(service.score.yahtzee).toBe(50);
  }));
  it('should set the full house score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,1,1, 2,3];
    service.setFullHouse(diceVals);
    expect(service.score.fullHouse).toBe(0);
    diceVals = [1,1,1,2,2];
    service.setFullHouse(diceVals);
    expect(service.score.fullHouse).toBe(25);
  }));
  it('should set the small straight score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [1,1,3,4,3];
    service.setSmallStraight(diceVals);
    expect(service.score.smallStraight).toBe(0);

    diceVals = [3,4,1,2,1];
    service.setSmallStraight(diceVals);
    expect(service.score.smallStraight).toBe(30);

    diceVals = [3,4,2,5,3];
    service.setSmallStraight(diceVals);
    expect(service.score.smallStraight).toBe(30);

    diceVals = [3,4,5,6,3];
    service.setSmallStraight(diceVals);
    expect(service.score.smallStraight).toBe(30);
  }));
  it('should set the large straight score', inject([ScoreService], (service: ScoreService) => {
    let diceVals = [2,3,4,5,3];
    service.setLargeStraight(diceVals);
    expect(service.score.largeStraight).toBe(0);

    diceVals = [2,3,4,5,1];
    service.setLargeStraight(diceVals);
    expect(service.score.largeStraight).toBe(40);

    diceVals = [2,3,4,5,6];
    service.setLargeStraight(diceVals);
    expect(service.score.largeStraight).toBe(40);
  }));

});
