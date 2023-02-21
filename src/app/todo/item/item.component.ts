import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  editable = false;
  isOpen = false;

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  @HostListener('document:click', ['$event']) //Remove the dropdown menu when clicking outside of the item component
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if ((!target.closest('.item-componet'))) {
      this.isOpen = false;
    }
  }


  saveItem(description: string) { 
    if (!description) return; 
    this.editable = false;
    this.item.description = description;
  }

  toggleOptions() {
    this.isOpen = !this.isOpen;
  }

}
