import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  confirmDeletion = false;
  isOpen = false;
  editedItemValue = '';

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();
  @Output() saveToLocalStorage = new EventEmitter<Item>();

  ngOnInit() {
    this.editedItemValue = this.item.description;
  }

  markAsDone() {
    this.item.done = !this.item.done;
    this.saveToLocalStorage.emit();
  }

  saveItem(description: string) {
    //prevent from saving empty task
    if (this.editedItemValue.trim() === '') return;
    //Save new description and save item in the local storage
    this.item.description = description;
    this.saveToLocalStorage.emit();
  }

  @HostListener('document:click', ['$event'])
  //remove the empty task only when the user clicks outside of the task
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('.item-component') &&
      this.editedItemValue.trim() === ''
    ) {
      this.remove.emit();
    }
  }

  markAsImportant() {
    this.item.isImportant = !this.item.isImportant;
    this.saveToLocalStorage.emit();
  }
}
