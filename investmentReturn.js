//U22562170
export function calculateInvestmentReturn(principal, rate, years) {
    return principal * Math.pow(1 + rate / 100, years);
}