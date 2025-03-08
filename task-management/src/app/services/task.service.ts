import { Injectable } from '@angular/core';
import { BaseTaskComponent } from '../models/base-task.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: BaseTaskComponent[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      category: 'Work',
      status: 'Pending',
      deadline: new Date()
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      category: 'Study',
      status: 'Pending',
      deadline: new Date()
    }
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  }
}
