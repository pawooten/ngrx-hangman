import { Component } from '@angular/core';

@Component({
  selector: 'app-letter-panel',
  templateUrl: './letter-panel.component.html',
  styleUrls: ['./letter-panel.component.css']
})
export class LetterPanelComponent {
  letters = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
  ];
}
