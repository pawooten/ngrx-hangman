import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { guessLetter } from 'src/app/actions';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-letter-panel',
  templateUrl: './letter-panel.component.html',
  styleUrls: ['./letter-panel.component.css']
})
export class LetterPanelComponent {
  readonly letters = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
  ];

  readonly rowCss = [ '', 'ngrx-hangman__letter-panel-second-row', 'ngrx-hangman__letter-panel-third-row'];

  constructor(private store: Store<AppState>) {}

  onLetterClicked(event: any, letter: string) {
    // TODO probably not legit for NgRx since a browser refresh could restore the Store but not the state of the material button components.
    event.currentTarget.disabled = true;
    this.store.dispatch(guessLetter({ letter }));
  }
}
