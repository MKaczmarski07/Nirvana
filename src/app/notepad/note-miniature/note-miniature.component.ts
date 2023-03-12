import { Component, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-miniature',
  templateUrl: './note-miniature.component.html',
  styleUrls: ['./note-miniature.component.css']
})
export class NoteMiniatureComponent {
@Input() note!: Note;
}
