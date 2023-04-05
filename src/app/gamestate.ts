import { RecordScore } from "./RecordScore";

export interface GameState {
  playerName: string,
  highScore: RecordScore | undefined;
}
