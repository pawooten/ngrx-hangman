import { of } from "rxjs";
import { IPlayerService } from "./player.service";
import { RecordScore } from "../RecordScore";

export class MockPlayerService implements IPlayerService {
  public getPlayerName$() {
    return of('Paul');
  }

  public getRecord$() {
    const record: RecordScore = { playerName: 'Paul', wordLength: 10, time:10 };
    return of(record);
  }
}
