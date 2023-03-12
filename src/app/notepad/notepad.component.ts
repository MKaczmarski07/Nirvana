import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomDateService } from '../date.service';
import { Note } from '../notepad/note';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent {
  constructor(
    private titleService: Title,
    private dateService: CustomDateService
  ) { }
  
  notes: Note[] = [{
    content: "Według mnie to nie ma tak że dobrze albo że nie dobrze, gdybym miał powiedzieć, co cenię w życiu najbardziej powiedziuałbym że ludzi, ludzki, którzy by tak rzec pomaga, kto wie, dla czego by nie",
    title: "Make a notepad component and a note interface",
    date: this.dateService.getCurrentDate()
  },
  {
    content: "Według mnie to nie ma tak że dobrze albo że nie dobrze, gdybym miał powiedzieć, co cenię w życiu najbardziej powiedziuałbym że ludzi, ludzki, którzy by tak rzec pomaga, kto wie, dla czego by nie",
    title: "Make a notepad component and a note interface",
    date: this.dateService.getCurrentDate()
    },
    {
      content: "Według mnie to nie ma tak że dobrze albo że nie dobrze, gdybym miał powiedzieć, co cenię w życiu najbardziej powiedziuałbym że ludzi, ludzki, którzy by tak rzec pomaga, kto wie, dla czego by nie",
      title: "Make a notepad component and a note interface",
      date: this.dateService.getCurrentDate()
    },
    {
      content: "Według mnie to nie ma tak że dobrze albo że nie dobrze, gdybym miał powiedzieć, co cenię w życiu najbardziej powiedziuałbym że ludzi, ludzki, którzy by tak rzec pomaga, kto wie, dla czego by nie",
      title: "Make a notepad component and a note interface",
      date: this.dateService.getCurrentDate()
    }];
  numberOfNotes: number = this.notes.length;
  
  ngOnInit() {
    this.titleService.setTitle('Notepad');
    this.dateService.getCurrentDate();
  }

}
