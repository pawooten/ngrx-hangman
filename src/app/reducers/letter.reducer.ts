import { createReducer, on } from "@ngrx/store";
import { LetterState } from "../state/letter.state";
import { newGame, guessLetter } from "../actions";

const initialState: LetterState = {
  guessedLetters: [],
  targetWord: 'DOGBISCUIT',
  currentGuess: '??????????'.split('')
};

export const letterReducer = createReducer(
  initialState,
  on(newGame, (state) => initialState),
  on(guessLetter, (state, action) => {
    const currentGuess = [...state.currentGuess];
    updateGuess(currentGuess, action.letter, state.targetWord);
    return {
      guessedLetters: state.guessedLetters.concat([action.letter]),
      targetWord: state.targetWord,
      currentGuess: currentGuess
    };
  })
);

const updateGuess = (currentGuess: string[], guessedLetter: string, target: string): void => {
  const length = currentGuess.length;
  let targetCharacter;
  for (let index = 0; index < length; index++) {
    if (currentGuess[index] === '?') {
      // This character has not yet been matched by a previously guessed letter. Does it match the currently guessed letter?
      targetCharacter = target.charAt(index);
      if (guessedLetter === targetCharacter) {
        // It does! Update the currentGuess so that the GuessIndicator to inform the user of their progress.
        currentGuess[index] = targetCharacter;
      }
    }
  }
};
