import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../data/dummy-tasks';
import { User } from '../user/user.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskDto } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) user!: User;
  tasks = dummyTasks;
  showNewTaskForm = false;

  constructor(private tasksService: TasksService) { }

  get userSpecificTasks(){
    return this.tasksService.getUserTasks(this.user.id);
  }

  onAddingTask(){
    this.showNewTaskForm = true;
  }

  closeDialog() {
    this.showNewTaskForm = false;
  }
}
