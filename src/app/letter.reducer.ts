import { createReducer, on } from "@ngrx/store";
import { LetterState } from "./letter.state";
import { newGame, guessLetter } from "./actions";

const initialState: LetterState = {
  guessedLetters: []
};

export const letterReducer = createReducer(
  initialState,
  on(newGame, (state) => initialState),
  on(guessLetter, (state, action) => {
    return {
      guessedLetters: state.guessedLetters.concat([action.letter])
    };
  })
);
