import { Component } from '@angular/core';
import { CustomDateService } from '../date.service';
import { MusicService } from '../music.service';
import { TimerService } from '../timer.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-focus-mode',
  templateUrl: './focus-mode.component.html',
  styleUrls: ['./focus-mode.component.css'],
})
export class FocusModeComponent {
  constructor(
    public dateService: CustomDateService,
    public musicService: MusicService,
    public timerService: TimerService,
    public userDataService: UserDataService
  ) {}
}
