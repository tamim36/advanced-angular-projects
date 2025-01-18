import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { UserInputModel } from './user-input/user-input.model';
import { InvestmentResultsService } from './investment-results/investment-results.service';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'investment-calculator';
  showInvestmentTable: boolean = false;

  constructor(private investmentService: InvestmentResultsService) { }

  calculateInvestment(userInput: UserInputModel) {
    this.showInvestmentTable = true;
    this.investmentService.calculateInvestmentResults(userInput);
  }

}
