import { Component } from '@angular/core';
import { CustomDateService } from '../../services/date.service';
import { MusicService } from '../../services/music.service';
import { TimerService } from '../../services/timer.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-focus-mode',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    public dateService: CustomDateService,
    public musicService: MusicService,
    public timerService: TimerService,
    public userDataService: UserDataService
  ) {}
}
