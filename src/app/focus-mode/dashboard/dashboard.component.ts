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
  chartDestroyed = false;

  setValues() {
    this.allTasks = this.userDataService.getNumberOfTasks();
    this.completedTasks = this.userDataService.getNumberOfCompletedTasks();
    this.toDoTasks = this.allTasks - this.completedTasks;
    // prevent from dividing by 0
    if (this.allTasks !== 0) {
      this.completedTasksPercentage = Math.round(
        (this.completedTasks / this.allTasks) * 100
      );
    } else {
      this.completedTasksPercentage = 0;
    }
  }

  SetchartData() {
    // prevent from not displaying chart when there is no data
    if (this.toDoTasks === 0 && this.completedTasks === 0) {
      return [1, 0];
    }
    return [this.toDoTasks, this.completedTasks];
  }

  createChart() {
    const existingChart = Chart.getChart('myChart');
    if (existingChart) {
      existingChart.destroy();
    }
    this.chart = new Chart(this.canvas, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: this.SetchartData(),
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

  ngOnInit() {
    this.userDataService.getTasks();
    this.setValues();
    this.canvas = document.getElementById('myChart');
    this.createChart();
  }
}
