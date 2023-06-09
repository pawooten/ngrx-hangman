import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ScoreBoardComponent } from './score-board.component';
import { GameService } from '../../services/game.service';
import { MockGameService } from '../../services/mock-game.service';
import { PlayerService } from '../../services/player.service';
import { MockPlayerService } from '../../services/mock-player.service';

describe('ScoreBoardComponent', () => {
  let component: ScoreBoardComponent;
  let fixture: ComponentFixture<ScoreBoardComponent>;
  const mockGameService = new MockGameService();
  const mockPlayerService = new MockPlayerService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreBoardComponent ],
      imports: [ MatListModule, MatCardModule, MatIconModule ],
      providers: [
        { provide: GameService, useValue: mockGameService },
        { provide: PlayerService, useValue: mockPlayerService }
      ]
    })
    .compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should retrieve the game time', () => {
    jest.spyOn(mockGameService, 'getGameTime$');

    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(mockGameService.getGameTime$).toHaveBeenCalled();
  })

  it('should retrieve the playerName', () => {
    jest.spyOn(mockPlayerService, 'getPlayerName$');
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(mockPlayerService.getPlayerName$).toHaveBeenCalled();
  })

  it('should render the playerName', () => {
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const recordHeading = compiled.querySelector<HTMLHeadingElement>('.score-board__player-name');
    expect(recordHeading?.innerHTML).toBe('Player: Paul');
  });

  it('should retrieve the record score', () => {
    jest.spyOn(mockPlayerService, 'getRecord$');
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(mockPlayerService.getRecord$).toHaveBeenCalled();
  });

  it('should format and render the record score', () => {
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const recordHeading = compiled.querySelector<HTMLHeadingElement>('.score-board__game-record');
    expect(recordHeading?.innerHTML).toBe('Record: Paul (10 in 10)');
  });

  it('should retrieve the guessed letters', () => {
    jest.spyOn(mockGameService, 'getGuessedLetters$');
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(mockGameService.getGuessedLetters$).toHaveBeenCalled();
  });

  it('should render the guessed letters count', () => {
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const subscription = mockGameService.getGuessedLetters$().subscribe((guessedLetters) => {
      const compiled = fixture.nativeElement as HTMLElement;
      const heading = compiled.querySelector<HTMLHeadingElement>('score-board__guessed-letters');
      expect(heading?.innerHTML).toBe(`Guessed Letters: ${guessedLetters.length}`);
    });
    subscription.unsubscribe();
  });
});
