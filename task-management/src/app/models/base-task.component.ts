// src/app/models/base-task.component.ts
export class BaseTaskComponent {
    id!: number;
    title!: string;
    description!: string;
    category!: 'Work' | 'Personal' | 'Study';
    status: 'Pending' | 'Completed' = 'Pending';
    deadline!: Date;
  }
  