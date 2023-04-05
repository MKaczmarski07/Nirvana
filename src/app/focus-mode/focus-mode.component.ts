import { Component } from '@angular/core';
import { CustomDateService } from '../date.service';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-focus-mode',
  templateUrl: './focus-mode.component.html',
  styleUrls: ['./focus-mode.component.css'],
})
export class FocusModeComponent {
  constructor(
    public dateService: CustomDateService,
    public musicService: MusicService
  ) {}

  toggleFullscreen() {
    //Open/close fullscreen mode
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
