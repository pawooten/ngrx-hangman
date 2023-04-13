import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectGameRecord, selectPlayerName } from '../selectors/player.selectors';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private store: Store<AppState>) { }

  public getPlayerName$() {
    return this.store.pipe(select(selectPlayerName));
  }

  public getRecord$() {
    return this.store.pipe(select(selectGameRecord));
  }
}
