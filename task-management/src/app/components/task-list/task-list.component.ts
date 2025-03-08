import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: any[] = []; 

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  onTaskCompleted() {
    this.tasks = this.taskService.getTasks();
  }
}
