import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-guess-indicator',
  templateUrl: './guess-indicator.component.html',
  styleUrls: ['./guess-indicator.component.css']
})
export class GuessIndicatorComponent {

  readonly guess$ : Observable<string[]>;
  readonly isPaused$: Observable<boolean>;

  constructor(private gameService: GameService) {
    this.guess$ = this.gameService.getCurrentGuess$();
    this.isPaused$ = this.gameService.getIsPaused$();
  }
}
