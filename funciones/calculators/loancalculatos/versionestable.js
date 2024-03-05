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
  
  let Loan_Calculator = function(
    loan_amount,
    annual_interest,
    years,
    months,
    month
  ) {
    let Number_of_payments = years * 12 + months;
    let Annual_Interest_rate = annual_interest / 100;
  
    let Monthly_interest_rate = Annual_Interest_rate / 12;
  
    let Monthly_payment =
      (loan_amount * Monthly_interest_rate) /
      (1 - Math.pow(1 + Monthly_interest_rate, -Number_of_payments));
  
    let Total_interest_paid = Monthly_payment * Number_of_payments - loan_amount;
    let Total_to_be_repaid = loan_amount + Total_interest_paid;
  
    // Cálculo de la tasa de interés anual efectiva
    let Effective_annual_rate = ((Total_to_be_repaid / loan_amount) ** (1 / years) - 1) * 100;
  
    return [
      Monthly_payment,
      Total_interest_paid,
      Number_of_payments,
      Total_to_be_repaid,
      Effective_annual_rate
    ];
  };
  
  let result = Loan_Calculator(20, 20, 2, 2, 9);
  
  console.log(`Loan Summary:
  \tLoan amount: $10
  \tAnnual Interest rate: 10%
  \tYears: 1
  \tMonths: 1
  \tLoan start date: 16/08/23
  \tMonthly payment: $${result[0].toFixed(2)}
  \tTotal interest paid: $${result[1].toFixed(2)}
  \tNumber of payments: ${result[2]}
  \tTotal to be repaid: $${result[3].toFixed(2)}
  \tEffective annual %: ${result[4].toFixed(2)}%`);