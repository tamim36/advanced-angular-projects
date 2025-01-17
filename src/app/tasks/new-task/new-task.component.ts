import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskDto } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() dialogCloseEvent = new EventEmitter();
  title = '';
  summary = '';
  dueDate = '';
  private tasksService = inject(TasksService);

  onDialogClose(){
    this.dialogCloseEvent.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title : this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }, this.userId);
    
    this.onDialogClose();
  }
}
