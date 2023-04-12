import { Injectable } from '@angular/core';
import { AppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import { selectCurrentGuess, selectGameTime, selectGuessedLetters } from '../selectors/game.selector';
import { guessLetter, newGame } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private store: Store<AppState>) {}

  public getCurrentGuess$() {
    return this.store.pipe(select(selectCurrentGuess));
  }

  public getGameTime$() {
    return this.store.pipe(select(selectGameTime));
  }
  public getGuessedLetters$() {
    return this.store.pipe(select(selectGuessedLetters));
  }

  public guessLetter(letter: string) : void {
    this.store.dispatch(guessLetter({ letter }));
  }

  public newGame() : void {
    this.store.dispatch(newGame());
  }
}
