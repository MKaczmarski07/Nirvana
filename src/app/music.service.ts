import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  playerType: 'lofi' | 'anime' | 'ambient' = 'lofi';
  isMusicPlaying = false;
  audio = new Audio();
  isPaused = false;
  isMuted = false;

  musicIndex = 0;
  music!: any;
  musicFilePath!: string;
  musicArtist!: string;
  musicTitle!: string;
  lengthOfPlaylist!: number;
  isPlayerVisible = true;

  constructor() {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    // get music data from json file
    fetch('../assets/music/music-data.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // assign information depending on the selected index in the music array
        this.music = data.music[this.musicIndex];
        this.lengthOfPlaylist = data.music.length;
        this.musicFilePath = this.music.path;
        this.musicTitle = this.music.title;
        this.musicArtist = this.music.artist;
        this.audio.src = this.musicFilePath;
      })
      .catch((error) => console.error(error));
  }

  playSound() {
    if (this.isPaused) {
      // play the autio from the current time
      this.audio.currentTime = this.audio.currentTime;
      this.isPaused = false;
    } else {
      // play the audio from the beginning
      this.audio.load();
    }
    this.audio.play();
    this.isMusicPlaying = true;
  }

  pauseSound() {
    this.audio.pause();
    this.isPaused = true;
    this.isMusicPlaying = false;
  }

  muteSound() {
    this.isMuted ? (this.audio.volume = 0) : (this.audio.volume = 1);
    console.log(this.audio.volume);
  }

  nextSong() {
    if (this.musicIndex === this.lengthOfPlaylist - 1) {
      // if the item is the last in the array, go back to the beginning
      this.musicIndex = -1;
    }
    this.musicIndex++;
    this.getData();
    this.pauseSound();
  }

  previousSong() {
    if (this.musicIndex === 0) {
      // if the item is the first in the array, go to the end
      this.musicIndex = this.lengthOfPlaylist;
    }
    this.musicIndex--;
    this.getData();
    this.pauseSound();
  }
}