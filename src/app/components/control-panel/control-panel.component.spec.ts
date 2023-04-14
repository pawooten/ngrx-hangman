import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ControlPanelComponent } from './control-panel.component';
import { MockGameService } from '../../services/mock-game.service';
import { GameService } from '../../services/game.service';

describe('ControlPanelComponent', () => {
  let component: ControlPanelComponent;
  let fixture: ComponentFixture<ControlPanelComponent>;
  let mockGameService: MockGameService;
  beforeEach(
    waitForAsync(() => {
      mockGameService = new MockGameService();
      TestBed.configureTestingModule({
        declarations: [ ControlPanelComponent ],
        providers: [
          { provide: GameService, useValue: mockGameService },
        ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(ControlPanelComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke GameService.newGame() when onNewGameClicked() is invoked', () => {
    jest.spyOn(mockGameService, 'newGame');
    component.onNewGameClicked();
    expect(mockGameService.newGame).toHaveBeenCalled();
  });
});
