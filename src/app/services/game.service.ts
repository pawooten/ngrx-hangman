import { Injectable } from '@angular/core';
import { AppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import { selectGuessedLetters } from '../selectors/game.selector';
import { guessLetter } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private store: Store<AppState>) {}

  getGuessedLetters = () => {
    return this.store.pipe(select(selectGuessedLetters));
  }

  guessLetter(letter: string) : void {
    this.store.dispatch(guessLetter({ letter }));
  }
}
