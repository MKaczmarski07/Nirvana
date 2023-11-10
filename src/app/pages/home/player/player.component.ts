import { Component, OnChanges, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  constructor(public musicService: MusicService) {}

  ngOnInit() {
    // get music data only when the music is not playing
    // this prevents the music from restarting when the user switches between pages
    if (!this.musicService.isMusicPlaying) {
      this.musicService.getData();
    }
  }
}
