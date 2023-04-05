import { Component } from '@angular/core';
import { CustomDateService } from '../date.service';
import { MusicService } from '../music.service';
import { TimerService } from '../timer.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-focus-mode',
  templateUrl: './focus-mode.component.html',
  styleUrls: ['./focus-mode.component.css'],
  animations: [
    trigger('toggleVisibility', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('200ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class FocusModeComponent {
  constructor(
    public dateService: CustomDateService,
    public musicService: MusicService,
    public timerService: TimerService
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
