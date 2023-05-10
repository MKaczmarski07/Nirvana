import { Component, Output, EventEmitter, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-confirm-deletion',
  templateUrl: './confirm-deletion.component.html',
  styleUrls: ['./confirm-deletion.component.css'],
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
export class ConfirmDeletionComponent {
  @Output() closeDialog = new EventEmitter();
  @Output() deleteNote = new EventEmitter();
  @Input() isDialogOpen = false;
  clickCount = 0;

  ngOnChanges() {}

  @HostListener('document:click', ['$event']) //Close the dialog when clicking outside
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dialog') && this.isDialogOpen) {
      // first click will not close the dialog ( required to open the dialog properly)
      this.clickCount++;
      if (this.clickCount === 2) {
        // second click will close the dialog and reset the click count
        this.closeDialog.emit();
        this.clickCount = 0;
      }
    }
  }
}
