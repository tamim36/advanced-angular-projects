import { NewTaskDto } from "./task/task.model";
import { dummyTasks } from "../data/dummy-tasks";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TasksService {
private tasks = dummyTasks;
private localStorageKey = 'EasyTaskManagement.tasks';

constructor(){
    const tasks = localStorage.getItem(this.localStorageKey);

    if (tasks){
        this.tasks = JSON.parse(tasks);
    }
}

getUserTasks(userId: string){
    return this.tasks.filter(task => task.userId === userId)!;
}

addTask(newTask: NewTaskDto, userId: string){
    this.tasks.push({
        id: new Date().getTime().toString(),
        userId: userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
    });

    this.SaveTasks();
}

removeTask(taskId: string){
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.SaveTasks();
}

private SaveTasks(){
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
}

}