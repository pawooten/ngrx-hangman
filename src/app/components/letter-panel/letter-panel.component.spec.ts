import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { LetterPanelComponent } from './letter-panel.component';
import { GameService } from '../../services/game.service';
import { MockGameService } from '../../services/mock-game.service';

describe('LetterPanelComponent', () => {
  let component: LetterPanelComponent;
  let fixture: ComponentFixture<LetterPanelComponent>;
  const mockGameService = new MockGameService();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterPanelComponent ],
      imports: [ MatCardModule, MatGridListModule ],
      providers: [ { provide: GameService, useValue: mockGameService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a mat-grid-tile for each letter of the alphabet', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tiles = compiled.querySelectorAll<HTMLSpanElement>('mat-grid-tile');
    expect(tiles.length).toBe(26);
  });
});
