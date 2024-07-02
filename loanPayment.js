export function calculateLoanPayment(P, r, n) {
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) -1);
}