import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public userDataService: UserDataService) {}

  canvas: any;
  chart!: Chart;
  allTasks = 0;
  completedTasks = 0;
  toDoTasks = 0;

  setValues() {
    this.allTasks = this.userDataService.getNumberOfTasks();
    this.completedTasks = this.userDataService.getNumberOfCompletedTasks();
    this.toDoTasks = this.allTasks - this.completedTasks;
  }

  ngOnInit() {
    this.userDataService.getTasks();
    this.setValues();
    this.canvas = document.getElementById('myChart');
    this.chart = new Chart(this.canvas, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [this.toDoTasks, this.completedTasks],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', '#1B95E0'],
            borderColor: ['rgba(54, 162, 235, 1)', '#1B95E0'],
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
