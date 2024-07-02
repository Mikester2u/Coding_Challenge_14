//U22562170

import {calculateInterest} from 'interestRate.js';
import {calculateLoanPayment} from 'loanPayment.js';
import {calculateInvestmentReturn} from 'investmentReturn.js';

function getValidatedInputs(...ids) {
    const inputs = ids.map(id => document.getElementById(id).value);
    for (let value of inputs) {
        if (value === '' || isNaN(value)) {
            return null;
        }
    }
    return inputs.map(Number);
}

function setResultText(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

document.getElementById('calculate-interest').addEventListener('click', () => { //Validation
    const inputs = getValidatedInputs('interest-principal', 'interest-rate', 'interest-time');
    if (inputs === null) {
        alert('Please enter valid numbers.');
        return;
    }
    const [principal, rate, time] = inputs;
    const interest = calculateInterest(principal, rate / 100, time);
    setResultText('interest-result', `Interest: ${interest.toFixed(2)}`);
});

document.getElementById('calculate-loan').addEventListener('click', () => {//Validation
    const inputs = getValidatedInputs('loan-principal', 'loan-rate', 'loan-time');
    if (inputs === null) {
        alert('Please enter valid numbers.');
        return;
    }
    const [principal, rate, years] = inputs;
    const loanPayment = calculateLoanPayment(principal, rate, years);
    setResultText('loan-result', `Monthly Payment: ${loanPayment.toFixed(2)}`);
});

document.getElementById('calculate-investment').addEventListener('click', () => { //Validation
    const inputs = getValidatedInputs('investment-principal', 'investment-rate', 'investment-time');
    if (inputs === null) {
        alert('Please enter valid numbers.');
        return;
    }
    const [principal, rate, years] = inputs;
    const investmentReturn = calculateInvestmentReturn(principal, rate, years);
    setResultText('investment-result', `Future Value: ${investmentReturn.toFixed(2)}`);
});