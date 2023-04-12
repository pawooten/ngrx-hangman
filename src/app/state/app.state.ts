import { PlayerState } from "./player.state";
import { GameState } from "./game.state";
export interface AppState {
  letters: GameState,
  player: PlayerState
};
