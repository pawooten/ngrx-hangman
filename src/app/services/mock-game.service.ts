import { Observable, of } from "rxjs";
import { IGameService } from "./game.service";
import { Injectable } from "@angular/core";

@Injectable()
export class MockGameService implements IGameService {
  public getCurrentGuess$(): Observable<string[]> {
    return of(['?', 'O', ]);//'G', 'B', '?', '?', 'C', '?', '?', 'T']);
  }

  public getGameTime$(): Observable<number> {
    return of(0);
  }

  public getGuessedLetters$(): Observable<string[]> {
    return of([]);
  }

  public guessLetter(letter: string): void {
  }

  public newGame(): void {
  }
};
