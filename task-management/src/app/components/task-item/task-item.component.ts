
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseTaskComponent } from '../../models/base-task.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent extends BaseTaskComponent {
  @Input() task!: BaseTaskComponent;
  @Output() taskCompleted = new EventEmitter<void>();
  
  markAsCompleted() {
    this.task.status = 'Completed';
    this.taskCompleted.emit();
  }
}
