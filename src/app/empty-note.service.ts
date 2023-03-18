import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmptyNoteService {
  //prevent from saving an empty note by clicking on the menu
  isEmpty: boolean = false;
  confirmLeaving: boolean = false;
  constructor() { }
}
