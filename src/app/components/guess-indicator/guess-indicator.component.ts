import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentGuess } from 'src/app/selectors/letter.selector';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-guess-indicator',
  templateUrl: './guess-indicator.component.html',
  styleUrls: ['./guess-indicator.component.css']
})
export class GuessIndicatorComponent {

  readonly guess$ : Observable<string[]>;
  constructor(private store: Store<AppState>) {
    this.guess$ = this.store.pipe(
      select(selectCurrentGuess));
  }
}
