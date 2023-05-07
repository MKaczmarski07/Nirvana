import { Injectable } from '@angular/core';
import { Item } from './todo/item';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  userName = '';
  showError = false;
  userTasks: Item[] = [];

  getName() {
    const savedName = localStorage.getItem('userName');
    if (savedName) this.userName = JSON.parse(savedName);
  }

  getTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.userTasks = JSON.parse(savedTasks);
    }
  }

  getNumberOfTasks() {
    return this.userTasks.length;
  }

  getNumberOfCompletedTasks() {
    return this.userTasks.filter((task: Item) => task.done === true).length;
  }

  addName(name: string) {
    if (name.trim() === '') {
      this.showError = true;
      return;
    }
    this.userName = name;
    this.showError = false;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('userName', JSON.stringify(this.userName));
  }
}
