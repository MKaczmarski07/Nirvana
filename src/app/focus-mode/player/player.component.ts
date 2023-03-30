import { Component, Input, OnChanges, OnInit } from '@angular/core';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  playerType: 'lofi' | 'anime' | 'ambient' = 'lofi';
  isMusicPlaying = false;
  audio = new Audio();
  isPaused = false;
  @Input() isMuted = false;

  musicIndex = 0;
  music !: any;
  musicFilePath !: string;
  musicArtist !: string;
  musicTitle !: string;
  lengthOfPlaylist !: number;

  ngOnInit() { 
    this.getData();
  }

  getData() {
    // get music data from json file
    fetch('../../../assets/music/music-data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.music = data.music[this.musicIndex];
        this.lengthOfPlaylist = data.music.length;
        this.musicFilePath = this.music.path;
        this.musicTitle = this.music.title;
        this.musicArtist = this.music.artist;
        this.audio.src = this.musicFilePath;
      })
      .catch(error => console.error(error));
  }

  ngOnChanges() {
    this.muteSound();
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
    this.isMuted ? this.audio.volume = 0 : this.audio.volume = 1;
  }

  nextSong() {
    if (this.musicIndex === this.lengthOfPlaylist - 1) { 
      //console.log('end of playlist');
      this.musicIndex = -1;
    } 
    this.musicIndex++;
    this.getData();
    this.pauseSound()
    
  
  }

  previousSong() {
    if (this.musicIndex === 0) {
      //console.log('beginning of playlist');
      this.musicIndex = this.lengthOfPlaylist;
    }
    this.musicIndex--;
    this.getData();
    this.pauseSound()
    
  }

 
}

  


