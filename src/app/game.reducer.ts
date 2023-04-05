import { createReducer, on } from "@ngrx/store";
import { newGame, setPlayerName } from "./actions";
import { GameState } from "./gamestate";

export const initialState: GameState = {
  playerName: '',
  highScore: { playerName: 'Paul', wordLength: 8, time: 30 }
};

export const gameReducer = createReducer(
  initialState,
  on(newGame, (state) => initialState),
  on(setPlayerName, (state, action) => {
    state.playerName = action.playerName;
    return state;
  })
);
