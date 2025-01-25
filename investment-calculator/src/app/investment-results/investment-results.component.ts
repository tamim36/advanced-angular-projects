import { Component, inject } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentResultsService);

  InvestmentData = this.investmentService.annualInvestmentData.asReadonly();

}
