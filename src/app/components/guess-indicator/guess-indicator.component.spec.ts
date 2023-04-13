import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessIndicatorComponent } from './guess-indicator.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../reducers/game.reducer';

describe('GuessIndicatorComponent', () => {
  let component: GuessIndicatorComponent;
  let fixture: ComponentFixture<GuessIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessIndicatorComponent ],
      providers: [ provideMockStore({ initialState })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
