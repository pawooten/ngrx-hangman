import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessIndicatorComponent } from './guess-indicator.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../reducers/game.reducer';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

describe('GuessIndicatorComponent', () => {
  let component: GuessIndicatorComponent;
  let fixture: ComponentFixture<GuessIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessIndicatorComponent ],
      imports: [ MatChipsModule, MatCardModule],
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
