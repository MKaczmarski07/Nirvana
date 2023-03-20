import { Component, Input, Output, EventEmitter, HostListener, OnInit} from '@angular/core';
import { Item } from '../item';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({  opacity: 0, right: '-5%' }),
            animate('.2s ease-out', 
                    style({  opacity: 1, right: '0' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1,  right: '0'  }),
            animate('.2s ease-in', 
                    style({  opacity: 0, right: '-5%' }))
          ]
        )
      ]
    )
  ]
})
  
export class ItemComponent {
  confirmDeletion = false;
  isOpen = false;
  editedItemValue = '';

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();
  @Output() saveToLocalStorage = new EventEmitter<Item>()

  ngOnInit() {
    this.editedItemValue = this.item.description;
  }


  // @HostListener('document:click', ['$event']) //Remove the dropdown menu when clicking outside of the item component 
  // onClick(event: MouseEvent) {
  //   const target = event.target as HTMLElement;
  //   if ((!target.closest('.task-menu')) && this.isOpen) {
  //     if (this.isOpen && !target.closest('.btn-options')) {
  //       this.isOpen = false;
  //       this.confirmDeletion = false;
  //       this.saveItem(this.editedItemValue)
  //     }
      
  //   }
  // }

  markAsDone() {
    this.item.done = !this.item.done
    this.saveToLocalStorage.emit()
  }

  
  saveItem(description: string) {
    //prevent from saving empty task
    if (!description) return; 
    //Save new description and save item in the local storage
    this.item.description = description;
    this.saveToLocalStorage.emit()
  }

  markAsImportant() {
    this.item.isImportant = !this.item.isImportant
    this.saveToLocalStorage.emit()
  }


  toggleOptions() {
    //Toggle the dropdown menu
    this.isOpen = !this.isOpen;
    if(!this.isOpen) this.confirmDeletion = false

  }

  

}
