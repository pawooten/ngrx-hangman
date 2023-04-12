import { createAction, props } from "@ngrx/store";

export const newGame = createAction('[Game] New Game');
export const setPlayerName = createAction('[Game] Set Player Name', props<{playerName: string}>());
export const guessLetter = createAction('[Game] Guess Letter', props<{letter: string}>());
export const tick = createAction('[Game] Tick');
