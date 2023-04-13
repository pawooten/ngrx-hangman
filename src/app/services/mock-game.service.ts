import { of } from "rxjs";
import { GameService } from "./game.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MockGameService extends GameService {
  override getCurrentGuess$() {
    return of(['A', 'B', 'C']);
  }
  override getGameTime$() {
    return of(0);
  }

  override getGuessedLetters$() {
    return of([]);
  }

  public override guessLetter(letter: string): void {
  }

  public override newGame(): void {
  }
}
