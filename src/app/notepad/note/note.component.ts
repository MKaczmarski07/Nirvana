import { Component,Output, EventEmitter, Input } from '@angular/core';
import { Note } from '../note';
import { CustomDateService } from 'src/app/date.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  constructor(private dateService: CustomDateService) { }

  @Output() closeCurrentNote = new EventEmitter<boolean>();
  @Input() note!: Note;
  @Input() index!: number;
  @Output() updateNoteValue = new EventEmitter();
  @Output() deleteNote = new EventEmitter<number>();
  @Output() refreshNotes = new EventEmitter();
  displayedDate = this.dateService.getCurrentDate()
  editable = false;

  saveEditedNote() {
    //prevent from saving empty note
    if (this.note.content !== '' || this.note.title !== '') {
      //send data to notepad.component 
      this.updateNoteValue.emit({index: this.index, note: this.note});
    } else {
      // ASK USER IF HE WANTS TO DELETE THE NOTE
      //delete note if it's empty
      //this.deleteNote.emit(this.index);
      
    }
    //change date only if the note was edited
    this.note.date = this.dateService.getCurrentDate();
    
  }

  
 }
