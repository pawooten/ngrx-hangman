import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PlayerState } from 'src/app/player.state';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent {
  gameRecord$: Observable<string>;

  constructor(private store: Store<PlayerState>) {
    this.gameRecord$ = store.select('playerName');
  }

  private formatGameRecord(playerState: PlayerState) : string {
    if (!playerState.highScore) {
      return 'No Record';
    }
    return `Record: ${playerState.highScore.playerName} (${playerState.highScore.wordLength} in ${playerState.highScore.time})`;
  }
}
