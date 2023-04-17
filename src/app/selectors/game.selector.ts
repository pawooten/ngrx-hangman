import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { GameState } from "../state/game.state";

const gameStateSelector = (state: AppState) => state.letters;
export const selectGuessedLetters = createSelector(
  gameStateSelector,
  (gameState: GameState) => gameState.guessedLetters
);
export const selectCurrentGuess = createSelector(
  gameStateSelector,
  (gameState: GameState) => gameState.currentGuess
);
export const selectGameTime = createSelector(
  gameStateSelector,
  (gameState: GameState) => gameState.currentTime
);
export const selectPause = createSelector(
  gameStateSelector,
  (gameState: GameState) => gameState.isPaused
);
