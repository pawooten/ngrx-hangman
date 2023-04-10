import { PlayerState } from "./player.state";
import { LetterState } from "./letter.state";
export interface AppState {
  letters: LetterState,
  player: PlayerState
};
