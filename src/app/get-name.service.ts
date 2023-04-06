import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetNameService {
  constructor() {}

  userName: string = '';

  getName() {
    const savedName = localStorage.getItem('userName');
    if (savedName) this.userName = JSON.parse(savedName);
  }

  addName(name: string) {
    this.userName = name;
    console.log(this.userName);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('userName', JSON.stringify(this.userName));
  }
}
