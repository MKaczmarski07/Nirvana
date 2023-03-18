import { Component,Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Note } from '../note';
import { CustomDateService } from 'src/app/date.service';
import { EmptyNoteService } from 'src/app/empty-note.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  constructor(
    private dateService: CustomDateService,
    public emptyNoteService: EmptyNoteService
  ) { }

  @Output() closeCurrentNote = new EventEmitter<boolean>();
  @Input() note!: Note;
  @Input() index!: number;
  @Output() updateNoteValue = new EventEmitter();
  @Output() deleteNote = new EventEmitter<number>();;
  confirmDeletion = false;
  displayedDate = this.dateService.getCurrentDate()
  editable = false;

  ngOnInit() {
    this.emptyNoteService.isEmpty = false;
    this.emptyNoteService.confirmLeaving = false;
  }

  saveEditedNote() {
    //send data to notepad.component 
    this.updateNoteValue.emit({index: this.index, note: this.note});
    //change date only if the note was edited
    this.note.date = this.dateService.getCurrentDate();
  }

  checkIfEmpty() {
    if (this.note.content.trim() === '' && this.note.title.trim() === '') {
      //check if the note is empty
      //trim() method removes all whitespace and prevents the user from saving a note with only spaces
      this.emptyNoteService.isEmpty = true;
    } else {
      this.emptyNoteService.isEmpty = false;
    }
  }

  leaveAndDelete() { 
    if (this.emptyNoteService.isEmpty) {
      // ask user if he wants to leave and delete the empty note
      this.emptyNoteService.confirmLeaving = true;
    } else {
      //if the note is not empty, save it
      this.closeCurrentNote.emit();
    }
  }

  
 }
