import { Component, Input, Output } from '@angular/core';
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
  
  notes: Note[] = [];
  numberOfNotes = 0;
  @Input() showNewNote = false;
  @Input() showCurrentNote = false;
  currentOpenedNote!: Note;
  
  
  ngOnInit() {
    this.titleService.setTitle('Notepad');
    this.dateService.getCurrentDate();
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
    this.numberOfNotes = this.notes.length;
  }

  addNote(note: Note) {
    if(note.content === '') return
    this.notes.unshift({ 
      title: note.title,
      content: note.content,
      date: note.date
    })
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  transferCurrentNote(currentNote: Note) {
    this.currentOpenedNote = currentNote; //receive data from note-miniature.component
  }
    
  

}
