import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceComponent } from './dice.component';

describe('DiceComponent', () => {
  let component: DiceComponent;
  let fixture: ComponentFixture<DiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should roll between 1 and 6', () => {
    for (let i = 0; i < 12; i++) {
      component.roll();
      const value = component.getValue();
      expect(value).toBeGreaterThanOrEqual(1);
      expect(value).toBeLessThanOrEqual(6);
    }
  });

  it('should render image to match the roll', () => {
    component.roll();
    const expectedImage = `dice_${component.getValue()}.png`;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain(expectedImage);
  });

  it('hold should keep dice from rolling', () => {
    const initialValue = component.getValue();
    component.hold();
    // Roll more than once to be sure the number is held
    for (let i = 0; i < 6; i++) {
      component.roll();
      const rollValue = component.getValue();
      expect(rollValue).toBe(initialValue);
    }
  });

  it('hold should grey out dice image', () => {
    const expectedStyle = 'disabled-dice';
    component.hold();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').classList.contains(expectedStyle)).toBeTruthy();
  });
});
