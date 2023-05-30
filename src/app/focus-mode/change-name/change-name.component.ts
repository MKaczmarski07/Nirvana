import {
  Component,
  HostListener,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css'],
  animations: [
    trigger('dialog', [
      // animate in
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.8)',
        }),
        animate(
          '0.2s ease-in-out',
          style({
            opacity: 1,
            transform: 'scale(1)',
          })
        ),
      ]),

      // animate out
      transition(':leave', [
        animate(
          '0.2s ease-in-out',
          style({
            opacity: 0,
            transform: 'scale(0.8)',
          })
        ),
      ]),
    ]),
    trigger('background', [
      // animate in
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '0.2s ease-in-out',
          style({
            opacity: 1,
          })
        ),
      ]),

      // animate out
      transition(':leave', [
        animate(
          '0.2s ease-in-out',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class ChangeNameComponent {
  constructor(public userDataService: UserDataService) {}

  clickCount = 0;

  @HostListener('document:click', ['$event']) //Close the dialog when clicking outside
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('.dialog') &&
      this.userDataService.isNameChangingPossible
    ) {
      // first click will not close the dialog ( required to open the dialog properly)
      this.clickCount++;
      if (this.clickCount === 2) {
        // second click will close the dialog and reset the click count
        this.userDataService.isNameChangingPossible = false;
        this.clickCount = 0;
      }
    }
  }

  @HostListener('document:wheel', ['$event']) //Close the dialog when scrolling
  onScroll() {
    if (this.userDataService.isNameChangingPossible) {
      this.userDataService.isNameChangingPossible = false;
    }
  }
}
