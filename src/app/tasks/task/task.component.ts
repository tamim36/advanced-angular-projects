import { Component, Input } from '@angular/core';
import { dummyTasks } from '../../data/dummy-tasks';
type Task = {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks = dummyTasks;
  @Input({required: true}) task! : Task;
}
