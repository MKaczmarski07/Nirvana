import { Component } from '@angular/core';
import { CustomDateService } from '../date.service';

@Component({
  selector: 'app-focus-mode',
  templateUrl: './focus-mode.component.html',
  styleUrls: ['./focus-mode.component.css']
})
export class FocusModeComponent {
  constructor(
    public dateService: CustomDateService,
  ) { }

  startingMinutes = 20;
  time = this.startingMinutes * 60;
  seconds: number|string= '00' 
  minutes: number | string = 20; 
  timerButton: 'start' | 'stop' = 'start'
  timerType: 'pomodoro' | 'shortB' | 'longB' = 'pomodoro';
  timer: any;

  playerType: 'lofi' | 'anime' | 'ambient' = 'lofi';
  isMuted = false;
  
 
  

  Fullscreen() {
    //Open/close fullscreen mode
    const elem = document.documentElement
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }

  }

  muteAll() { }


  //Timer functions

  //Wydzielić timer do zewnętrznego serwisu z globalną zmienną przechowującą wartość i stan timera
  Timer() {
    this.seconds = this.time % 60;
    this.minutes = Math.floor(this.time / 60);
    //Add 0 before seconds and minutes if they are less than 10
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    //reset timer when the countdown is over
    if (this.time === 0) this.resetTimer()
    this.time--;

  }

  startTimer() {
    this.timerButton = 'stop';
    this.Timer()
    this.timer = setInterval(() => this.Timer(), 1000);
  }

  stopTimer() {
    this.timerButton='start';
    clearInterval(this.timer);
  }

  resetTimer() {
    //Reset timer to default value
    this.stopTimer();
    this.time = this.startingMinutes * 60;
    this.minutes = this.startingMinutes < 10 ? '05' : this.startingMinutes;
    this.seconds = '00';
  }

  timerShortBreak() {
    this.resetTimer()
    this.timerType = 'shortB';
    this.startingMinutes = 5;
    this.time = this.startingMinutes * 60;
    this.minutes = '05';
    this.seconds = '00';
  }

  timerLongBreak() {
    this.resetTimer()
    this.timerType = 'longB';
    this.startingMinutes = 15;
    this.time = this.startingMinutes * 60;
    this.minutes = 15;
    this.seconds = '00';
  }

  timerPomodoro() { 
    this.resetTimer()
    this.timerType = 'pomodoro';
    this.startingMinutes = 20;
    this.time = this.startingMinutes * 60;
    this.minutes = 20;
    this.seconds = '00';
  }


  

}


  
  

