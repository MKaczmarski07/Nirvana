import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-miniature',
  templateUrl: './note-miniature.component.html',
  styleUrls: ['./note-miniature.component.css']
})
export class NoteMiniatureComponent {
  @Input() note!: Note;
  @Output() openCurrentNote = new EventEmitter();
  @Output() sendCurrentNoteIndex = new EventEmitter<number>();
  @Input() index!: number;
  

  onCurrentNoteOpened() { //send data to note.component
    this.openCurrentNote.emit();
    this.sendCurrentNoteIndex.emit(this.index);
  }
}
