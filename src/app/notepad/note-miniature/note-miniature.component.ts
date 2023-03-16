import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-miniature',
  templateUrl: './note-miniature.component.html',
  styleUrls: ['./note-miniature.component.css']
})
export class NoteMiniatureComponent {
  @Input() note!: Note;
  currentNote = this.note;
  @Output() openCurrentNote = new EventEmitter();
  @Output() sendCurrentNoteData = new EventEmitter<Note>();
  

  onCurrentNoteOpened() { //send data to note.component
    this.openCurrentNote.emit();
    this.sendCurrentNoteData.emit(this.currentNote);
  }
}
