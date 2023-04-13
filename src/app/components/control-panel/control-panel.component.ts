import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

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
