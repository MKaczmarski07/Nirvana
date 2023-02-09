import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-focus-mode',
  templateUrl: './focus-mode.component.html',
  styleUrls: ['./focus-mode.component.css']
})
export class FocusModeComponent {
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle('Focus mode');
  }

}
