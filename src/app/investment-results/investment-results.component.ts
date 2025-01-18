import { Component } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentResultsService) { }

  get InvestmentData(){
    return this.investmentService.InvestmentAnnualData;
  }

}
