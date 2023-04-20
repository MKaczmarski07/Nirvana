import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetNameService {
  constructor() {}

  userName = '';
  showError = false;

  getName() {
    const savedName = localStorage.getItem('userName');
    if (savedName) this.userName = JSON.parse(savedName);
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
