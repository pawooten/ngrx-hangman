import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { newGame } from 'src/app/actions';
import { GameService } from 'src/app/services/game.service';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  constructor(private gameService: GameService) {}

  onNewGameClicked() {
    this.gameService.newGame();
  }
}
