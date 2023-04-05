import { createReducer, on } from "@ngrx/store";
import { newGame, setPlayerName } from "./actions";
import { PlayerState } from "./player.state";

export const initialState: PlayerState = {
  playerName: '',
  highScore: { playerName: 'Paul', wordLength: 8, time: 30 }
};

export const playerReducer = createReducer(
  initialState,
  on(newGame, (state) => initialState),
  on(setPlayerName, (state, action) => {
    return {
      playerName: action.playerName,
      highScore: state.highScore
    };
  })
);
