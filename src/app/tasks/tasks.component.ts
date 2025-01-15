import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../data/dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: any;
  tasks = dummyTasks;

  get userSpecificTasks(){
    const taskData = this.tasks.filter(task => task.userId === this.user.id)!;
    console.log(taskData);
    return taskData;
  }
}
