import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { PlayerState } from "../state/player.state";

const playerStateSelector = (state: AppState) => state.player;
export const selectGameRecord = createSelector(
  playerStateSelector,
  (player: PlayerState) => player.highScore
);

export const selectPlayerName = createSelector(
  playerStateSelector,
  (player: PlayerState) => player.playerName
);
