//##########################################################################
//--------------------Hourly to Salary--------------------//
//##########################################################################
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

console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Monthly--------------------//
//##########################################################################

var Salary_to_Hourly_Monthly = function(p, h, w) {
    //variable names:
    var monthly_pay = (Number(p).toFixed(2))
    var per_week = (Number((p * 12) / w).toFixed(2))
    var hourly_pay = (Number(per_week/ h).toFixed(2))
    var median_salary = (Number((p / (57200/ 12)) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result2= Salary_to_Hourly_Monthly(300, 40, 52)
console.log(`Calculation Results:\n\t Hourly Pay ${result2[0]}$ \n\t Per Week ${result2[1]}$ \n\t Monthly Pay (avg) ${result2[2]} \n\t % of US median salary ${result2[3]}%` )



console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Biweekly--------------------//
//##########################################################################

var Salary_to_Hourly_Biweekly = function(p, h, w) {
    //variable names:
    var monthly_pay = (Number(p * 2.166666667).toFixed(2))
    var per_week = (Number(monthly_pay *12 / w).toFixed(2))
    var hourly_pay = (Number(per_week/ h).toFixed(2))
    var median_salary = (Number((monthly_pay  / (57200/ 12)) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result3= Salary_to_Hourly_Biweekly(300, 40, 52)
console.log(`Calculation Results:\n\t Hourly Pay ${result3[0]}$ \n\t Per Week ${result3[1]}$ \n\t Monthly Pay (avg) ${result3[2]} \n\t % of US median salary ${result3[3]}%` )



console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Weekly--------------------//
//##########################################################################

var Salary_to_Hourly_Weekly = function(p, h, w) {
    //variable names:
    var monthly_pay = (Number(p * w /12).toFixed(2))
    var per_week = (Number(p).toFixed(2))
    var hourly_pay = (Number(p / h).toFixed(2))
    var median_salary = (Number((monthly_pay  / (57200 / 12)) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result4= Salary_to_Hourly_Weekly(300, 40, 52)
console.log(`Calculation Results:\n\t Hourly Pay ${result4[0]}$ \n\t Per Week ${result4[1]}$ \n\t Monthly Pay (avg) ${result4[2]} \n\t % of US median salary ${result4[3]}%` )



console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Daily--------------------//
//##########################################################################

var Salary_to_Hourly_Daily = function(p, h, w) {
    //variable names:
    var per_week = (Number(p/ 8 * 40).toFixed(2))
    var monthly_pay = (Number(per_week * w /12).toFixed(2))
    var hourly_pay = (Number(p/ (h / 5) ).toFixed(2))
    var median_salary = (Number((monthly_pay  / (57200 / 12)) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result5= Salary_to_Hourly_Daily(80, 70, 60)
console.log(`Calculation Results:\n\t Hourly Pay ${result5[0]}$ \n\t Per Week ${result5[1]}$ \n\t Monthly Pay (avg) ${result5[2]} \n\t % of US median salary ${result5[3]}%` )

console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Time and a Half--------------------//
//##########################################################################

var Time_and_a_Half_Hourly = function(a,b=0,c){
    var Standard_hourly_rate  = a 
    var Time_and_a_half_rate  = a * 1.50
    var Time_and_a_half_pay   = a * (1.50*b)
    var Standard_pay = c * a
    var Total_money_earned = Time_and_a_half_pay + Standard_pay
    return [Time_and_a_half_rate,Standard_hourly_rate , Time_and_a_half_pay,Standard_pay, Total_money_earned ]
}
result6= Time_and_a_Half_Hourly(65,4,4 )
console.log(`Calculation Results: \n\t Time and a half rate: ${result6[0]} \n\t Standard hourly rate: ${result6[1]} \n\t Time and a half pay: ${result6[2]} \n\t Standard pay: ${result6[3]} \n\t Total money earned: ${result6[4]}`)

