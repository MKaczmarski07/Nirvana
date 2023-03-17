import { Component,Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Output() closeCurrentNote = new EventEmitter<boolean>();
  @Input() note!: Note;
  @Input() index!: number;
  
  

 }
