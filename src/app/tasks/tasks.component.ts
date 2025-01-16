import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../data/dummy-tasks';
import { User } from '../user/user.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskDto } from './task/task.model';

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

  get userSpecificTasks(){
    return this.tasks.filter(task => task.userId === this.user.id)!;
  }

  removeCompletedTask(taskId : string){
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  onAddingTask(){
    this.showNewTaskForm = !this.showNewTaskForm;
  }

  closeDialog() {
    this.showNewTaskForm = false;
  }

  AddTaskToUser(newTask : NewTaskDto) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.user.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    });
    this.showNewTaskForm = false;
  }
}
