import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PlayerState } from 'src/app/state/player.state';
import { selectGameRecord, selectPlayerName } from 'src/app/selectors/player.selectors';
import { AppState } from 'src/app/state/app.state';
import { RecordScore } from 'src/app/RecordScore';
import { map, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { setPlayerName } from 'src/app/actions';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent {
  gameRecord$: Observable<string>;
  playerName$: Observable<string>;
  playerName = new FormControl('');
  constructor(private store: Store<AppState>) {
    this.gameRecord$ = store.pipe(
        select(selectGameRecord),
        map(this.formatGameRecord)
      );
    this.playerName$ = store.pipe(
      select(selectPlayerName),
      tap((name) => this.playerName.setValue(name))
    );
    this.playerName.registerOnChange(() => {
      let formName = this.playerName?.value;
      if (!formName) {
        formName = '';
      }
      this.store.dispatch(setPlayerName({ playerName: formName }));
    });
  }

  onFormPlayerNameChange() {
    let formName = this.playerName?.value;
    if (!formName) {
      formName = '';
    }
    this.store.dispatch(setPlayerName({ playerName: formName }));
  }

  private formatGameRecord(record: RecordScore | undefined) : string {
    if (!record) {
      return 'No Record';
    }
    return `Record: ${record.playerName} (${record.wordLength} in ${record.time}s)`;
  }
}
