import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() isCurrentNoteOpened = false;
  @Input() currentNoteIndex!: number;
  currentOpenedNote!: Note;
  
  
  ngOnInit() {
    this.titleService.setTitle('Notepad');
    this.dateService.getCurrentDate();
    const savedNotes = localStorage.getItem('notes');
    //get notes from local storage
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
    //get the number of notes
    this.numberOfNotes = this.notes.length;
  }

  addNote(note: Note) { 
    //add new note to the array
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

  findCurrentNote(index: number) {
    //find the currently open note based on the index and send it to note-component
     this.currentOpenedNote = this.notes[index];
     this.currentNoteIndex = index;

   }
    
  

}
