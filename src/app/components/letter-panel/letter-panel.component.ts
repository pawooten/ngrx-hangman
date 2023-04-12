import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { guessLetter } from 'src/app/actions';
import { selectGuessedLetters } from 'src/app/selectors/game.selector';
import { GameService } from 'src/app/services/game.service';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-letter-panel',
  templateUrl: './letter-panel.component.html',
  styleUrls: ['./letter-panel.component.css']
})
export class LetterPanelComponent implements OnDestroy {
  readonly letters = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
  ];

  readonly rowCss = [ '', 'ngrx-hangman__letter-panel-second-row', 'ngrx-hangman__letter-panel-third-row'];

  readonly guessedLettersSubscription: Subscription;

  private disabledLetters = new Set<string>();

  constructor(private gameService: GameService) {
    this.guessedLettersSubscription = this.gameService.getGuessedLetters().subscribe((guessedLetters) => {
      this.disabledLetters = new Set<string>(guessedLetters);
    });
  }

  onLetterClicked(event: any, letter: string) {
    this.gameService.guessLetter(letter);
  }

  isSelectedLetter(letter: string) : boolean {
    return this.disabledLetters.has(letter);
  }
  ngOnDestroy(): void {
    this.guessedLettersSubscription.unsubscribe();
  }
}
