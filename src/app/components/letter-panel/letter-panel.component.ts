import { Component } from '@angular/core';

@Component({
  selector: 'app-letter-panel',
  templateUrl: './letter-panel.component.html',
  styleUrls: ['./letter-panel.component.css']
})
export class LetterPanelComponent {
  readonly letters = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
  ];

  readonly rowCss = [ '', 'ngrx-hangman__letter-panel-second-row', 'ngrx-hangman__letter-panel-third-row'];
}
