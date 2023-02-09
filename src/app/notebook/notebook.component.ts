import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent {
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle('Notebook');
  }

}
