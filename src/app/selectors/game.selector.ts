import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { GameState } from "../state/game.state";

const letterStateSelector = (state: AppState) => state.letters;
export const selectGuessedLetters = createSelector(
  letterStateSelector,
  (letters: GameState) => letters.guessedLetters
);
export const selectCurrentGuess = createSelector(
  letterStateSelector,
  (letters: GameState) => letters.currentGuess
);
