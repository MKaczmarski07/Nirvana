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
  confirmDeletion = false;
  isEmpty = false;
  displayedDate = this.dateService.getCurrentDate()
  editable = false;

  saveEditedNote() {
    //send data to notepad.component 
    this.updateNoteValue.emit({index: this.index, note: this.note});
    //change date only if the note was edited
    this.note.date = this.dateService.getCurrentDate();
  }

  checkIfEmpty() {
    if (this.note.content === '' && this.note.title === '') {
      // ask user if he wants to leave and delete the empty note
      this.isEmpty = true;
    } else {
      //if the note is not empty, save it
      this.closeCurrentNote.emit();
    }
      
  }

  
 }
