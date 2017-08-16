import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardComponent } from './scorecard.component';
import {DiceService} from '../service/dice.service';
import {ScoreService} from '../service/score.service';

describe('ScorecardComponent', () => {
  let component: ScorecardComponent;
  let fixture: ComponentFixture<ScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecardComponent ],
      providers: [ DiceService, ScoreService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
