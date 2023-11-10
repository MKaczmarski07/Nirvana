import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  playerType: 'lofi' | 'jazz' | 'ambient' = 'lofi';
  isMusicPlaying = false;
  audio = new Audio();
  isPaused = false;
  isMuted = false;

  isDataLoaded = false;
  musicIndex = 0;
  music!: any;
  musicFilePath!: string;
  musicArtist: string = 'Loading...';
  musicTitle: string = 'Loading...';
  lengthOfPlaylist!: number;
  volume = 1;

  constructor() {
    // play the next song when the current one ends
    this.audio.addEventListener('ended', () => {
      this.nextSong();
    });
  }

  ngOnInit() {
    this.getData();
  }

  checkifDataLoaded() {
    const checkifDataExists = setInterval(() => {
      if (this.isDataLoaded) {
        clearInterval(checkifDataExists);
      }
      this.getData();
      console.log('checking if data exists');
    }, 500);
  }

  getData() {
    // get music data from json file
    fetch('../assets/music/music-data.json')
      .then((response) => response.json())
      .then((data) => {
        this.isDataLoaded = true;
        // assign information depending on the player type and index
        this.music = data[this.playerType][this.musicIndex];
        this.lengthOfPlaylist = data[this.playerType].length;
        this.musicFilePath = this.music.path;
        this.musicTitle = this.music.title;
        this.musicArtist = this.music.artist;
        this.audio.src = this.musicFilePath;
        if (this.isMusicPlaying) {
          this.playSound();
        }
      })
      .catch((error) => {
        this.checkifDataLoaded();
        console.error(error);
      });
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
    this.isMuted ? (this.audio.volume = 0) : (this.audio.volume = this.volume);
  }

  setVolume(volume: number) {
    // set the volume of the audio based on the slider value
    this.audio.volume = volume;
  }

  nextSong() {
    if (this.musicIndex === this.lengthOfPlaylist - 1) {
      // if the item is the last in the array, go back to the beginning
      this.musicIndex = -1;
    }
    this.musicIndex++;
    this.getData();
  }

  previousSong() {
    if (this.musicIndex === 0) {
      // if the item is the first in the array, go to the end
      this.musicIndex = this.lengthOfPlaylist;
    }
    this.musicIndex--;
    this.getData();
  }

  changePlayerType(playerType: 'lofi' | 'jazz' | 'ambient') {
    if (this.playerType === playerType) return;

    this.playerType = playerType;
    this.musicIndex = 0;
    if (this.isMusicPlaying) {
      this.isMusicPlaying = false;
      this.getData();
      this.playSound();
    } else {
      this.getData();
    }
  }
}
