import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Note } from '../note';
import { CustomDateService } from 'src/app/date.service';
import { EmptyNoteService } from 'src/app/empty-note.service';
import { ConfirmDeletionComponent } from './confirm-deletion/confirm-deletion.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  constructor(
    private dateService: CustomDateService,
    public emptyNoteService: EmptyNoteService
  ) {}

  @Output() closeCurrentNote = new EventEmitter<boolean>();
  @Input() note!: Note;
  @Input() index!: number;
  @Output() updateNoteValue = new EventEmitter();
  @Output() deleteNote = new EventEmitter<number>();
  displayedDate = this.dateService.getCurrentDate();
  isEmpty = false;
  isDialogOpen = false;

  saveEditedNote() {
    //send data to notepad.component
    this.updateNoteValue.emit({ index: this.index, note: this.note });
    //change date only if the note was edited
    this.note.date = this.dateService.getCurrentDate();
  }

  checkIfEmpty() {
    if (this.note.content.trim() === '' && this.note.title.trim() === '') {
      //check if the note is empty
      //trim() method removes all whitespace and prevents the user from saving a note with only spaces
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }

  leaveNote() {
    this.checkIfEmpty();
    if (this.isEmpty) {
      this.deleteNote.emit(this.index);
    } else this.closeCurrentNote.emit(true);
  }

  confirmDeletion() {
    //open dialog to confirm deletion
    this.isDialogOpen = true;
  }
}
