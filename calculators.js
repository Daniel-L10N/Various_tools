
var Hourly_to_Salary= function(p, h, w) {
    //variable names:
    var per_Week_Worked = (Number(p * h).toFixed(2))
    var annual_Salary = (Number(per_Week_Worked * w).toFixed(2))
    var monthly_Pay  = (Number(annual_Salary / 12).toFixed(2))
    var median_salary = (Number((annual_Salary / 57200) *100).toFixed(1)) 
    return  [per_Week_Worked, annual_Salary, monthly_Pay, median_salary]
    
    
}

let result= Hourly_to_Salary(15, 10, 52)
console.log(`Calculation Results:\n\t Annual Salary ${result[1]}$ \n\t Monthly Pay (avg) ${result[2]}$ \n\t Per Week Worked ${result[0]} \n\t % of US median salary ${result[3]}%` )
/* 
//results 
Per_Week_Worked = result[0]
Annual_Salary = result[1]
Monthly_Pay = result[2]
Median_salary = result[3]
console.log(`Calculation Results:\n\t Annual Salary ${Annual_Salary}$ \n\t Monthly Pay (avg) ${Monthly_Pay}$ \n\t Per Week Worked ${Per_Week_Worked} \n\t % of US median salary ${Median_salary}%` )
*/


console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Anual--------------------//
//##########################################################################

var Salary_to_Hourly_Anual = function(p, h, w) {
    //variable names:
    var hourly_pay = (Number((p / w) /h).toFixed(2))
    var per_week = (Number(p / w).toFixed(2))
    var monthly_pay = (Number(p / 12).toFixed(2))
    var median_salary = (Number((p / 57200) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result1= Salary_to_Hourly_Anual(119, 1, 240)
console.log(`Calculation Results:\n\t Hourly Pay ${result1[0]}$ \n\t Per Week ${result1[1]}$ \n\t Monthly Pay (avg) ${result1[2]} \n\t % of US median salary ${result1[3]}%` )
/*
//results
Hourly_Pay = result1[0]
Per_Week = result1[1]
Monthly_Pay = result1[2]
Median_salary = result1[3]
console.log(`Calculation Results:\n\t Hourly Pay ${Hourly_Pay}$ \n\t Per Week ${Per_Week}$ \n\t Monthly Pay (avg) ${Monthly_Pay} \n\t % of US median salary ${Median_salary}%` )
*/

//##########################################################################
//--------------------Funcion Salary to Hourly Monthly--------------------//
//##########################################################################
/*
var Salary_to_Hourly_Monthly = function(p, h, w) {
    //variable names:
    var hourly_pay = (Number((p / w) /h).toFixed(2))
    var per_week = (Number(p / w).toFixed(2))
    var monthly_pay = (Number(p / 12).toFixed(2))
    var median_salary = (Number((p / 57200) * 100).toFixed(1))
    return result = [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result2= Salary_to_Hourly_Monthly(119, 1, 240)
console.log(`Calculation Results:\n\t Hourly Pay ${result2[0]}$ \n\t Per Week ${result2[1]}$ \n\t Monthly Pay (avg) ${result2[2]} \n\t % of US median salary ${result2[3]}%` )
/*
//results
Hourly_Pay = result2[0]
Per_Week = result2[1]
Monthly_Pay = result2[2]
Median_salary = result2[3]
console.log(`Calculation Results:\n\t Hourly Pay ${Hourly_Pay}$ \n\t Per Week ${Per_Week}$ \n\t Monthly Pay (avg) ${Monthly_Pay} \n\t % of US median salary ${Median_salary}%` )
*/