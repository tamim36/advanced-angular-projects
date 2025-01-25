import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type UserInputModel } from './user-input.model';


@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() userInputEvent = new EventEmitter<UserInputModel>();
  initialInvestment = 1000;
  annualInvestment = 50;
  expectedReturn = 5;
  durationInMonth = 12;

  onSubmit() {
    const model: UserInputModel = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      durationInMonth: this.durationInMonth
    };

    this.userInputEvent.emit(model);
  }

}
