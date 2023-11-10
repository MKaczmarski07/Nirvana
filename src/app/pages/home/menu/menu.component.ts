import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(public userDataService: UserDataService) {}

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
