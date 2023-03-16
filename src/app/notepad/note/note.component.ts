import { Component,Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
 @Output() showCurrentNote = new EventEmitter<boolean>();
 }
