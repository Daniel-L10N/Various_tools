//Loan Calculator With Extra Payments
const Months_of_year = { 1 : "January" ,  
    2: "February" ,
    3: "March" ,
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8:  "August",
    9: "September",
    10: "October",
    11: "November",
    12: "Dicember",
  
  };

//##########################################################################
//--------------------Loan Calculator--------------------//
//##########################################################################
let Loan_Calculator = function(loan_amount, annual_interest, years =0, months =0, month){
    
    console.log(Months_of_year[1])
    let Number_of_payments = ((years * 12)+ months);


    let Annual_Interest_rate = (annual_interest / 100);

    let Monthly_payment = ( ((Annual_Interest_rate/ Number_of_payments) + (Annual_Interest_rate/ Number_of_payments) / ( (1+ (Annual_Interest_rate / Number_of_payments)) ** Number_of_payments -1) ) * loan_amount) ;
    let Total_interest_paid = ((Monthly_payment * Number_of_payments ) - loan_amount);

    let Total_to_be_repaid = (loan_amount +  Total_interest_paid)
    
    month = month +months
    while (month > 12){
      month -12
    }
    Estimated_payoff = Months_of_year[month]
    
   return [Monthly_payment,Total_interest_paid, Number_of_payments, Total_to_be_repaid, Estimated_payoff] 
}

let result0= Loan_Calculator(20, 3, 2, 5,8)

console.log(`Loan Summary: \n\t Monthly payment: ${result0[0]} \n\t Total interest paid  ${result0[1]} \n\t Number of payments:  ${result0[2]} \n\t Total to be repaid: ${result0[3]} \n\t Estimated payoff: ${result0[4]} `)
