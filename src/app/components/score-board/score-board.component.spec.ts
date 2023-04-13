import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBoardComponent } from './score-board.component';
import { GameService } from '../../services/game.service';
import { MockGameService } from '../../services/mock-game.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { initialState } from '../../reducers/game.reducer';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
describe('ScoreBoardComponent', () => {
  let component: ScoreBoardComponent;
  let fixture: ComponentFixture<ScoreBoardComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreBoardComponent ],
      imports: [ MatListModule, MatCardModule ],
      providers: [
        { provide: GameService, useClass: MockGameService },
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
