import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-guess-indicator',
  templateUrl: './guess-indicator.component.html',
  styleUrls: ['./guess-indicator.component.css']
})
export class GuessIndicatorComponent {

  readonly guess$ : Observable<string[]>;
  readonly guessSummary$: Observable<string>;

  readonly isPaused$: Observable<boolean>;

  constructor(private gameService: GameService) {
    this.guess$ = this.gameService.getCurrentGuess$();
    this.guessSummary$ = this.guess$.pipe(map(this.formatGuessSummary));
    this.isPaused$ = this.gameService.getIsPaused$();
  }

  private formatGuessSummary(guess: string[]) : string {
    const guessedLetterCount = guess.filter(guessCharacter => guessCharacter != '?').length;
    return `${guessedLetterCount} of ${guess.length}`;
  }
}
