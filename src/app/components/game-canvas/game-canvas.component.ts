import { Component } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent {
  private readonly imagePaths = [
    '../../../assets/hangman-png/01.png',
    '../../../assets/hangman-png/02.png',
    '../../../assets/hangman-png/03.png',
    '../../../assets/hangman-png/04.png',
    '../../../assets/hangman-png/05.png',
    '../../../assets/hangman-png/06.png',
    '../../../assets/hangman-png/07.png',
    '../../../assets/hangman-png/08.png',
    '../../../assets/hangman-png/09.png',
    '../../../assets/hangman-png/10.png',
  ];

  readonly currentImagePath$: Observable<string>;

  constructor(private gameService: GameService) {
    this.currentImagePath$ = combineLatest([this.gameService.getGuessedLetters$(), this.gameService.getCurrentGuess$()]).pipe(map((guessedLetters, currentGuess) => {
      return this.imagePaths[7];
    }));
  }
}
