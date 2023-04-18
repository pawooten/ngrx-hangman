import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  readonly isPaused$: Observable<boolean>;
  readonly pauseLabel$: Observable<string>;
  constructor(private gameService: GameService) {
    this.isPaused$ = gameService.getIsPaused$();
    this.pauseLabel$ = this.isPaused$.pipe(map((isPaused) => isPaused ? 'Resume': 'Pause'));
  }

  onNewGameClicked() {
    this.gameService.newGame();
  }

  onPauseClicked() {
    this.gameService.pause();
  }
}
