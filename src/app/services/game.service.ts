import { Injectable } from '@angular/core';
import { AppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import { selectCurrentGuess, selectGameTime, selectGuessedLetters } from '../selectors/game.selector';
import { guessLetter, newGame, tick } from '../actions';
import { Observable } from 'rxjs';

export interface IGameService {
  getCurrentGuess$(): Observable<string[]>;
  getGameTime$(): Observable<number>;
  getGuessedLetters$(): Observable<string[]>;
  guessLetter(letter: string): void;
  newGame(): void;
}

@Injectable({
  providedIn: 'root'
})
export class GameService implements IGameService {

  private clockTickInterval = 1000; // ms

  constructor(private store: Store<AppState>) {
    this.startGameTimer();
  }

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

  private startGameTimer(): void {
    setInterval( () => this.store.dispatch(tick()), this.clockTickInterval);
  }
}
