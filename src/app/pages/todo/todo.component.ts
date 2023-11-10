import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { CustomDateService } from '../../services/date.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(
    private dateService: CustomDateService,
    public userDataService: UserDataService
  ) {}

  tasks: Item[] = [];
  dropdownOpen = false;
  currentDay = this.dateService.getCurrentDate();
  fadeInOut = '';
  filter: 'all' | 'active' | 'done' | 'important' = 'all';
  numberOfTasks = 0;

  ngOnInit() {
    this.dateService.getCurrentDate();
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
    this.numberOfTasks = this.tasks.length;
  }

  saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addItem(description: string) {
    //prevent from saving empty task
    if (description.trim() === '') return;
    //add item to the top of the list
    this.tasks.unshift({
      description,
      done: false,
      isImportant: false,
    });
    this.numberOfTasks = this.tasks.length;
    this.saveToLocalStorage();
  }

  removeItem(item: Item) {
    this.tasks.splice(this.tasks.indexOf(item), 1);
    this.numberOfTasks = this.tasks.length;
    this.saveToLocalStorage();
  }

  tasksfiltering() {
    if (this.filter === 'active') {
      return (item: Item) => !item.done;
    } else if (this.filter === 'done') {
      return (item: Item) => item.done;
    } else if (this.filter === 'important') {
      return (item: Item) => item.isImportant;
    }
    return (item: Item) => item;
  }
}
