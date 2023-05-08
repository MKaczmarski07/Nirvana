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
  chart!: Chart<'doughnut', number[], unknown>;
  allTasks = 0;
  completedTasks = 0;
  toDoTasks = 0;
  completedTasksPercentage = 0;

  setValues() {
    this.allTasks = this.userDataService.getNumberOfTasks();
    this.completedTasks = this.userDataService.getNumberOfCompletedTasks();
    this.toDoTasks = this.allTasks - this.completedTasks;
    this.completedTasksPercentage = Math.round(
      (this.completedTasks / this.allTasks) * 100
    );
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
            backgroundColor: ['#424a71', '#1B95E0'],
            borderColor: ['#424a71', '#1B95E0'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
        animation: false,
        events: [], // Disable all events on chart - chart is static
      },
    });
  }
}
