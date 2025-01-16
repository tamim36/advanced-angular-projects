import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskDto } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() dialogCloseEvent = new EventEmitter();
  @Output() taskFormData = new EventEmitter<NewTaskDto>();
  title = '';
  summary = '';
  dueDate = '';

  onDialogClose(){
    this.dialogCloseEvent.emit();
  }

  onSubmit() {
    let newTask : NewTaskDto = {
      title : this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }
    
    this.taskFormData.emit(newTask);
  }
}
