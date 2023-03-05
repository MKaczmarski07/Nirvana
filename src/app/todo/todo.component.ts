import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Item } from './item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(
    private titleService: Title,
  ) { }

  tasks: Item[] = [];
  dropdownOpen = false;
  fadeInOut = '';
  filter: 'all' | 'active' | 'done'| 'important' = 'all';
  
  ngOnInit() {
    this.titleService.setTitle('To Do');
    this.displayCurrentDate()
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
    
  }

  displayCurrentDate(): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const date = new Date();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();
  
    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
  }


  
  saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  
  addItem(description: string) {
    if (!description) return; // new description can't be an empty string
    this.tasks.unshift({ // add item to the top of the list
      description,
      done: false
    })
    
    this.saveToLocalStorage()
  }

  removeItem(item: Item) {
    this.tasks.splice(this.tasks.indexOf(item), 1);
    this.saveToLocalStorage()
    }

  

  dropdownMenu() {
    this.dropdownOpen = true;
    if (this.dropdownOpen) this.fadeInOut = 'fadeIn';
    
  }

  
  @HostListener('document:click', ['$event']) //Remove the dropdown menu when clicking outside of the input field
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if ((!target.closest('.input-field'))) {
      if (this.dropdownOpen) { //Toggle the fade out animation only if the dropdown menu is open
        this.dropdownOpen = false;
        this.fadeInOut = 'fadeOut';
      }
    }
  }

  dropwodnAnimationStage() {
    if (!this.dropdownOpen) {
      setTimeout(() => { return true; }, 500);
    } else {
      
    };
    return;
  } 
  

  
}





