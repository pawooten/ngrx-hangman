import { Injectable, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AppState } from '../state/app.state';
import { selectCurrentGuess, selectGameTime, selectGuessedLetters, selectPause } from '../selectors/game.selector';
import { guessLetter, newGame, pause, tick } from '../actions';

export interface IGameService {
  getCurrentGuess$(): Observable<string[]>;
  getGameTime$(): Observable<number>;
  getGuessedLetters$(): Observable<string[]>;
  getIsPaused$(): Observable<boolean>;
  guessLetter(letter: string): void;
  newGame(): void;
  pause(): void;
}

@Injectable({
  providedIn: 'root'
})
export class GameService implements IGameService, OnDestroy {
  private clockTickTimer: NodeJS.Timer | null = null;
  private clockTickInterval = 1000; // ms
  private readonly pauseSubscription: Subscription;

  constructor(private store: Store<AppState>) {
    this.pauseSubscription = this.store.pipe(select(selectPause)).subscribe((isPaused) => {
      if (isPaused) {
        this.stopGameTimer();
      } else {
        this.startGameTimer();
      }
    });
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
  public getIsPaused$() {
    return this.store.pipe(select(selectPause));
  }
  public guessLetter(letter: string) : void {
    this.store.dispatch(guessLetter({ letter }));
  }

  public newGame() : void {
    this.store.dispatch(newGame());
  }

  public pause() : void {
    this.store.dispatch(pause());
  }

  public ngOnDestroy(): void {
    this.pauseSubscription.unsubscribe();
  }

  private startGameTimer(): void {
    if (!this.clockTickTimer) {
      this.clockTickTimer = setInterval( () => this.store.dispatch(tick()), this.clockTickInterval);
    }
  }

  private stopGameTimer() : void {
    if (this.clockTickTimer) {
      clearInterval(this.clockTickTimer);
      this.clockTickTimer = null;
    }
  }
}
