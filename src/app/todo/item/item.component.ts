import { Component, Input, Output, EventEmitter, HostListener} from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  editable = false;
  isOpen = false;
  fadeInOut = '';

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();
  @Output() editedToLocalStorage = new EventEmitter<Item>()


  @HostListener('document:click', ['$event']) //Remove the dropdown menu when clicking outside of the item component 
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if ((!target.closest('.item-componet'))) {
      if (this.isOpen) { //Toggle the fade out animation only if the dropdown menu is open
        this.isOpen = false;
        this.fadeInOut = 'fadeOut';
      }
      this.editable = false;
    }
  }


  saveItem(description: string) {
    //Save new description and save item in the local storage
    if (!description) return;
    this.editable = false;
    this.item.description = description;
    this.editedToLocalStorage.emit()
  }

  toggleOptions() { //Toggle the dropdown menu
    this.isOpen = !this.isOpen;
    if (!this.isOpen) this.editable = false;

    if (this.isOpen) { //Toggle the fade in/out animation
      this.fadeInOut = 'fadeIn';
    }else this.fadeInOut = 'fadeOut';
    
  }

  

}
