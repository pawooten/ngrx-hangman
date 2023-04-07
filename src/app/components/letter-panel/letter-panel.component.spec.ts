import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterPanelComponent } from './letter-panel.component';

describe('LetterPanelComponent', () => {
  let component: LetterPanelComponent;
  let fixture: ComponentFixture<LetterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
