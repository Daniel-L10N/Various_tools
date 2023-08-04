//Loan Calculator With Extra Payments


//##########################################################################
//--------------------Loan Calculator--------------------//
//##########################################################################
let Loan_Calculator = function(loan_amount, annual_interest, years =0, months =0){
    
    
    let Number_of_payments = ((years * 12)+ months);


    let Annual_Interest_rate = (annual_interest / 100);

    let Monthly_payment = ( ((Annual_Interest_rate/ Number_of_payments) + (Annual_Interest_rate/ Number_of_payments) / ( (1+ (Annual_Interest_rate / Number_of_payments)) ** Number_of_payments -1) ) * loan_amount) ;
    let Total_interest_paid = ((Monthly_payment * Number_of_payments ) - loan_amount);

    let Total_to_be_repaid = (loan_amount +  Total_interest_paid)
    
    
   return [Monthly_payment,Total_interest_paid, Number_of_payments, Total_to_be_repaid] 
}

let result0= Loan_Calculator(1000, 5, 1)

console.log(`Loan Summary: \n\t Monthly payment: ${result0[0]} \n\t Total interest paid  ${result0[1]} \n\t Number of payments:  ${result0[2]} \n\t Total to be repaid: ${result0[3]}  `)