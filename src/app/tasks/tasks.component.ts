import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../data/dummy-tasks';
import { User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) user!: User;
  tasks = dummyTasks;

  get userSpecificTasks(){
    return this.tasks.filter(task => task.userId === this.user.id)!;
  }
}
