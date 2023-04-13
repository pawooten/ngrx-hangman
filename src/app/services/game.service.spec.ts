import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../reducers/game.reducer';
describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore({initialState})]
    });
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
