import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { PlayerState } from "./player.state";

export const selectGameRecord = createSelector(
  (state: AppState) => state.player,
  (player: PlayerState) => player.highScore
);
