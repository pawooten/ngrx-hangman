import { Component } from '@angular/core';
import { GameState } from './gamestate';
import { Store } from '@ngrx/store';
import { setPlayerName } from './actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-hangman';

  constructor(private store: Store<GameState>) {
    this.store.dispatch(setPlayerName({ playerName: 'dogbiscuit' }));
  }
}
