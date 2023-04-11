import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { LetterState } from "../state/letter.state";

const letterStateSelector = (state: AppState) => state.letters;
export const selectGuessedLetters = createSelector(
  letterStateSelector,
  (letters: LetterState) => letters.guessedLetters
);
export const selectCurrentGuess = createSelector(
  letterStateSelector,
  (letters: LetterState) => letters.currentGuess
);
