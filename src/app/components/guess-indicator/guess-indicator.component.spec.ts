import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { GuessIndicatorComponent } from './guess-indicator.component';
import { MockGameService } from '../../services/mock-game.service';
import { GameService } from '../../services/game.service';

describe('GuessIndicatorComponent', () => {
  let component: GuessIndicatorComponent;
  let fixture: ComponentFixture<GuessIndicatorComponent>;
  const mockGameService = new MockGameService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessIndicatorComponent ],
      imports: [ MatChipsModule, MatCardModule],
      providers: [ { provide: GameService, useValue: mockGameService } ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(GuessIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a mat-chip for each letter of the guess', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const spans = compiled.querySelectorAll<HTMLSpanElement>('mat-chip');
    const subscription = mockGameService.getCurrentGuess$().subscribe((currentGuess) => {
      expect(spans.length).toBe(currentGuess.length);
    });
    subscription.unsubscribe();
  });
});
