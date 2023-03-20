import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-focus-mode',
  templateUrl: './focus-mode.component.html',
  styleUrls: ['./focus-mode.component.css']
})
export class FocusModeComponent {
  constructor(private titleService: Title) { }
  startingMinutes = 20;
  time = this.startingMinutes * 60;
  seconds: number|string= '00' 
  minutes: number | string = 20; 
  timerButton: 'start' | 'stop' = 'start'
  timerType: 'pomodoro' | 'shortB' | 'longB' = 'pomodoro';
  timer: any;

  ngOnInit() {
    this.titleService.setTitle('Focus mode');
  }

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

  Timer() {
    this.seconds = this.time % 60;
    this.minutes = Math.floor(this.time / 60);
    //Add 0 before seconds and minutes if they are less than 10
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    this.time--;

  }

  startTimer() {
    this.timerButton='stop';
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
    this.minutes = this.startingMinutes === 5? '05' : this.startingMinutes;
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


  
  

