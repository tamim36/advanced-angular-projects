import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dummyTasks } from '../../data/dummy-tasks';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks = dummyTasks;
  @Input({required: true}) task! : Task;
  @Output() completedTask = new EventEmitter<string>();

  onCompleteTask(){
    this.completedTask.emit(this.task.id);
  }
}
