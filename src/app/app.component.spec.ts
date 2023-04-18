import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LetterPanelComponent } from './components/letter-panel/letter-panel.component';
import { GuessIndicatorComponent } from './components/guess-indicator/guess-indicator.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { initialState } from './reducers/game.reducer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, ControlPanelComponent, LetterPanelComponent, GuessIndicatorComponent, ScoreBoardComponent
      ],
      imports: [ MatCardModule, MatChipsModule, MatGridListModule, MatIconModule, MatListModule],
      providers: [ provideMockStore({ initialState})]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngrx-hangman'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngrx-hangman');
  });

  it('should render an app-control-panel', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-control-panel')).toBeTruthy();
  });

  it('should render an app-guess-indicator', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-guess-indicator')).toBeTruthy();
  });

  it('should render an app-score-board', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-score-board')).toBeTruthy();
  });

  it('should render an app-letter-panel', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-letter-panel')).toBeTruthy();
  });
});
