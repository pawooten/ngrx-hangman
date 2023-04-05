import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PlayerState } from 'src/app/player.state';
import { selectGameRecord } from 'src/app/player.selectors';
import { AppState } from 'src/app/app.state';
import { RecordScore } from 'src/app/RecordScore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent {
  gameRecord$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.gameRecord$ = store.pipe(
        select(selectGameRecord),
        map(this.formatGameRecord)
      );
  }

  private formatGameRecord(record: RecordScore | undefined) : string {
    if (!record) {
      return 'No Record';
    }
    return `Record: ${record.playerName} (${record.wordLength} in ${record.time}s)`;
  }
}
