const Months_of_year = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

const Loan_Calculator = function(
  loan_amount,
  annual_interest,
  years,
  months,
  month,
  loan_start_date,
  additionalPayments = 0,
  extraFees = 0,
  addToLoan = false,
  oneTimeAdditionalPayment = 0
) {
  const Number_of_payments = years * 12 + months;
  const Annual_Interest_rate = annual_interest / 100;

  const Monthly_interest_rate = Annual_Interest_rate / 12;

  const Monthly_payment =
    (loan_amount * Monthly_interest_rate) /
    (1 - Math.pow(1 + Monthly_interest_rate, -Number_of_payments));

  let Total_interest_paid = Monthly_payment * Number_of_payments - loan_amount;
  let Total_to_be_repaid = loan_amount + Total_interest_paid;

  // Apply additional payments
  if (additionalPayments > 0) {
    Total_to_be_repaid -= additionalPayments * Monthly_payment;
  }

  // Apply extra fees
  Total_to_be_repaid += extraFees;

  // Apply one-time additional payment
  if (oneTimeAdditionalPayment > 0) {
    Total_to_be_repaid -= oneTimeAdditionalPayment;
  }

  // Apply addition to loan
  if (addToLoan) {
    Total_to_be_repaid += addToLoan;
  }

  // Cálculo de la tasa de interés anual efectiva
  const Effective_annual_rate = ((Total_to_be_repaid / loan_amount) ** (1 / years) - 1) * 100;

  return [
    Monthly_payment,
    Total_interest_paid,
    Number_of_payments,
    Total_to_be_repaid,
    Effective_annual_rate
  ];
};

const loan_amount = 20;
const annual_interest = 20;
const years = 2;
const months = 2;
const month = 9;
const loan_start_date = "23/08/2023";

const result = Loan_Calculator(
  loan_amount,
  annual_interest,
  years,
  months,
  month,
  loan_start_date,
  0,     // additionalPayments
  0,     // extraFees
  false, // addToLoan
  0      // oneTimeAdditionalPayment
);

console.log(`Loan Summary:
\tLoan amount: $${loan_amount}
\tAnnual Interest rate: ${annual_interest}%
\tYears: ${years}
\tMonths: ${months}
\tLoan start date: ${loan_start_date}
\tMonthly payment: $${result[0].toFixed(2)}
\tTotal interest paid: $${result[1].toFixed(2)}
\tNumber of payments: ${result[2]}
\tTotal to be repaid: $${result[3].toFixed(2)}
\tEffective annual %: ${result[4].toFixed(2)}%`);