import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './state/app.state';
import { newGame } from './actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-hangman';

  constructor(private store: Store<AppState>) {
    this.store.dispatch(newGame());
  }
}
