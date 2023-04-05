import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  startingMinutes = 20;
  time = this.startingMinutes * 60;
  seconds: number | string = '00';
  minutes: number | string = 20;
  timerButton: 'start' | 'stop' = 'start';
  timerType: 'pomodoro' | 'shortB' | 'longB' = 'pomodoro';
  timer: any;
  timerCycles = 0;

  Timer() {
    this.seconds = this.time % 60;
    this.minutes = Math.floor(this.time / 60);
    //Add 0 before seconds and minutes if they are less than 10
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    //change timer stage when the time is over
    if (this.time === 0) {
      this.timerCycles++;
      if (this.timerType === 'pomodoro' && this.timerCycles < 4) {
        this.timerShortBreak();
        this.startTimer();
        return;
      }
      if (this.timerType === 'pomodoro' && this.timerCycles === 5) {
        this.timerLongBreak();
        this.startTimer();
        return;
      }
      if (this.timerType === 'shortB') {
        this.timerPomodoro();
        this.startTimer();
        return;
      }
      if (this.timerType === 'longB') {
        console.log(this.timerCycles + this.timerType);
        // reset timer to the default stage when 3 pomodoro cycles will be done
        this.timerType = 'pomodoro';
        this.timerPomodoro();
        this.timerCycles = 0;
        return;
      }
    }
    this.time--;
  }

  startTimer() {
    this.timerButton = 'stop';
    this.Timer();
    this.timer = setInterval(() => this.Timer(), 1000);
  }

  stopTimer() {
    this.timerButton = 'start';
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
    this.resetTimer();
    this.timerType = 'shortB';
    this.startingMinutes = 5;
    this.time = this.startingMinutes * 60;
    this.minutes = '05';
    this.seconds = '00';
  }

  timerLongBreak() {
    this.resetTimer();
    this.timerType = 'longB';
    this.startingMinutes = 15;
    this.time = this.startingMinutes * 60;
    this.minutes = 15;
    this.seconds = '00';
  }

  timerPomodoro() {
    this.resetTimer();
    this.timerType = 'pomodoro';
    this.startingMinutes = 20;
    this.time = this.startingMinutes * 60;
    this.minutes = 20;
    this.seconds = '00';
  }
}
