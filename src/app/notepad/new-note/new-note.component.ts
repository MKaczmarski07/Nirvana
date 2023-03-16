import { Component, EventEmitter, Output} from '@angular/core';
import { CustomDateService } from 'src/app/date.service';
import { Note } from '../note';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  constructor(public dateService: CustomDateService) { }

  note!: Note;
  content = '';
  noteTitle = '';
  creationDate = this.dateService.getCurrentDate();;
  @Output() sendNewNote = new EventEmitter<Note>();
  @Output() showNewNote = new EventEmitter<boolean>();
  


   saveNewNote() { 
     const newNote: Note = {
       title: this.noteTitle,
       content: this.content,
      date: this.creationDate
     };
     this.sendNewNote.emit(newNote);
   }
  
 
   

}
