import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../reducers/game.reducer';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore({ initialState })]
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
