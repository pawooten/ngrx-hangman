import { RecordScore } from "./RecordScore";

export interface PlayerState {
  playerName: string,
  highScore: RecordScore | undefined;
}
