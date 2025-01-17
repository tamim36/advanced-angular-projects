import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dummyTasks } from '../../data/dummy-tasks';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks = dummyTasks;
  @Input({required: true}) task! : Task;
  @Output() completedTask = new EventEmitter<string>();

  constructor(private tasksService: TasksService) { }

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
