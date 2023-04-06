import { Component } from '@angular/core';
import { EmptyNoteService } from '../empty-note.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(public emptyNoteService: EmptyNoteService) {}

  ngOnInit() {
    this.emptyNoteService.confirmLeaving = false;
  }
}
