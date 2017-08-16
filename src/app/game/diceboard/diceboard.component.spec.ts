import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceboardComponent } from './diceboard.component';
import {DiceComponent} from '../dice/dice.component';
import {DiceService} from '../service/dice.service';

describe('DiceboardComponent', () => {
  let component: DiceboardComponent;
  let fixture: ComponentFixture<DiceboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceboardComponent, DiceComponent ],
      providers: [ DiceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
