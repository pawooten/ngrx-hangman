import { createReducer, on } from "@ngrx/store";
import { GameState } from "../state/game.state";
import { newGame, guessLetter, tick, pause } from "../actions";

export const initialState: GameState = {
  guessedLetters: [],
  targetWord: 'DOGBISCUIT',
  currentGuess: '??????????'.split(''),
  currentTime: 0,
  isPaused: false
};

export const gameReducer = createReducer(
  initialState,
  on(newGame, (state) => initialState),
  on(guessLetter, (state, action) => {
    const currentGuess = [...state.currentGuess];
    updateGuess(currentGuess, action.letter, state.targetWord);
    return {
      guessedLetters: state.guessedLetters.concat([action.letter]),
      targetWord: state.targetWord,
      currentGuess: currentGuess,
      currentTime: state.currentTime,
      isPaused: state.isPaused
    };
  }),
  on(tick, (state) => {
    return {
      guessedLetters: state.guessedLetters,
      targetWord: state.targetWord,
      currentGuess: state.currentGuess,
      currentTime: state.currentTime + 1,
      isPaused: state.isPaused
    }
  }),
  on(pause, (state) => {
    return {
      guessedLetters: state.guessedLetters,
      targetWord: state.targetWord,
      currentGuess: state.currentGuess,
      currentTime: state.currentTime,
      isPaused: !state.isPaused
    }
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
