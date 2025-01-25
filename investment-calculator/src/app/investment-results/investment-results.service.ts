import { Injectable, signal } from "@angular/core";
import { type UserInputModel } from "../user-input/user-input.model";
import { InvestmentResultsModel } from "./investment-results.model";

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
    annualInvestmentData = 
        signal<InvestmentResultsModel[] | undefined>(undefined);
    

    calculateInvestmentResults(inputModel: UserInputModel) {
        const annualData = [];
        let investmentValue = inputModel.initialInvestment;

        for (let i = 0; i < inputModel.durationInMonth; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (inputModel.expectedReturn / 100);
            investmentValue += interestEarnedInYear + inputModel.annualInvestment;
            const totalInterest =
                investmentValue - inputModel.annualInvestment * year - inputModel.initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: inputModel.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: inputModel.initialInvestment + inputModel.annualInvestment * year,
            });
        }

        // console.log('Input Data: ' + JSON.stringify(inputModel));
        // console.log('Annual Data: ' + JSON.stringify(annualData));
        this.annualInvestmentData.set(annualData);
    }
}