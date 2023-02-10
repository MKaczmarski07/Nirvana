import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Item } from './item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle('To Do');
  }

  allItems = [
    { description: 'Task 1', done: false },
    { description: 'Task 2', done: false }
  ];


  addItem(description: string) {
    if (!description) return; // new description can't be an empty string
    this.allItems.unshift({ // add item to the top of the list
      description,
      done: false
    })
  }

  removeItem(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
