import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { RecordScore } from 'src/app/RecordScore';
import { map } from 'rxjs/operators';
import { GameService } from '../../services/game.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnDestroy {
  readonly gameRecord$: Observable<string>;
  readonly gameTime$: Observable<number>;
  playerName$: Observable<string>;

  private guessCountBehaviorSubject = new BehaviorSubject(0);
  readonly guessCount$ = this.guessCountBehaviorSubject.asObservable();

  readonly guessCountSubscription: Subscription;

  constructor(private gameService: GameService, private playerService : PlayerService) {
    this.gameRecord$ = playerService.getRecord$().pipe(
      map(this.formatGameRecord)
    );

    this.gameTime$ = this.gameService.getGameTime$();
    this.guessCountSubscription = gameService.getGuessedLetters$().subscribe((guessedLetters) => {
      this.guessCountBehaviorSubject.next(guessedLetters.length);
    });

    this.playerName$ = playerService.getPlayerName$();
  }

  ngOnDestroy(): void {
    this.guessCountSubscription.unsubscribe();
  }

  private formatGameRecord(record: RecordScore | undefined) : string {
    if (!record) {
      return 'No Record';
    }
    return `Record: ${record.playerName} (${record.wordLength} in ${record.time})`;
  }
}
