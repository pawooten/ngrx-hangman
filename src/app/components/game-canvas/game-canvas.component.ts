import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const context = this.canvas.nativeElement.getContext("2d");
    if (!context) {
      console.error('uh oh');
      return;
    }
    context.fillStyle = 'green';
    context.fillRect(0, 0, 200, 200);
  }

  @ViewChild('canvas', {static: false, read: ElementRef}) canvas!: ElementRef<HTMLCanvasElement>;


}
