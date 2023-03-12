import { Component, Input, Output, EventEmitter, HostListener} from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  editable = false;
  confirmDeletion = false;
  isOpen = false;
  fadeInOut = '';
  editedItemValue = '';

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();
  @Output() saveToLocalStorage = new EventEmitter<Item>()


  @HostListener('document:click', ['$event']) //Remove the dropdown menu when clicking outside of the item component 
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if ((!target.closest('.item-componet'))) {
      if (this.isOpen) { //Toggle the fade out animation only if the dropdown menu is open
        this.isOpen = false;
        this.fadeInOut = 'fadeOut';
      }
      this.editable = false;
      this.confirmDeletion = false;
    }
  }

  markAsDone() {
    this.item.done = !this.item.done
    this.saveToLocalStorage.emit()
  }

  editItem() { 
    this.editable = !this.editable
    this.editedItemValue = this.item.description; //display the current description in the input field
    if(this.editable) this.confirmDeletion = false; //If the user is editing the item, the confirm deletion option will be removed
  }

  saveItem(description: string) {
    //Save new description and save item in the local storage
    if (!description) return;
    this.editable = false;
    this.item.description = description;
    this.saveToLocalStorage.emit()
  }

  markAsImportant() {
    this.item.isImportant = !this.item.isImportant
    this.saveToLocalStorage.emit()
  }

  deleteItem() { 
    this.confirmDeletion = !this.confirmDeletion
    if(this.confirmDeletion) this.editable = false; //If the user is confirming the deletion, the edit option will be removed
  }

  toggleOptions() { //Toggle the dropdown menu
    this.isOpen = !this.isOpen;
    if (!this.isOpen) this.editable = false;
    if(!this.isOpen) this.confirmDeletion = false

    if (this.isOpen) { //Toggle the fade in/out animation
      this.fadeInOut = 'fadeIn';
    }else this.fadeInOut = 'fadeOut';
    
  }

  

}
