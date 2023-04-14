import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectGameRecord, selectPlayerName } from '../selectors/player.selectors';
import { Observable } from 'rxjs';
import { RecordScore } from '../RecordScore';

export interface IPlayerService {
  getPlayerName$(): Observable<string>;
  getRecord$(): Observable<RecordScore | undefined>;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements IPlayerService {

  constructor(private store: Store<AppState>) { }

  public getPlayerName$() {
    return this.store.pipe(select(selectPlayerName));
  }

  public getRecord$() {
    return this.store.pipe(select(selectGameRecord));
  }
}
