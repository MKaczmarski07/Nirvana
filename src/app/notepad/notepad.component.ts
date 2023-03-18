import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomDateService } from '../date.service';
import { EmptyNoteService } from '../empty-note.service';
import { Note } from '../notepad/note';


@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent {
  constructor(
    private titleService: Title,
    private dateService: CustomDateService,
    public emptyNoteService: EmptyNoteService
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
    this.getNotesFromLocalStorage()
    
  }

  addNote(note: Note) { 
    //add new note to the array
    if(note.content === '' && note.title === '') return
    this.notes.unshift({ 
      title: note.title,
      content: note.content,
      date: note.date
    })
    this.saveToLocalStorage();
    //update the number of notes
    this.numberOfNotes = this.notes.length;
  }

  saveToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  getNotesFromLocalStorage() {
    const savedNotes = localStorage.getItem('notes');
    //get notes from local storage
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
    //get the number of notes
    this.numberOfNotes = this.notes.length;
   }

  findCurrentNote(index: number) {
    //find the currently open note based on the index and send it to note-component
     this.currentOpenedNote = this.notes[index];
     this.currentNoteIndex = index;

   }
    
  updateNoteValue(index: number, note: Note) { 
    //update the note value in the array
    this.notes[index] = note;
    this.saveToLocalStorage()
  }

  deleteNote(index: number) {
    //delete note from the array
    this.notes.splice(index, 1);
    this.saveToLocalStorage();
    //close the note if it was deleted
    this.isCurrentNoteOpened = false;
    //update the number of notes
    this.numberOfNotes = this.notes.length;
    //if the note was deleted, clicking on the menu will not open the popup
    this.emptyNoteService.isEmpty = false;
  }


  


}
