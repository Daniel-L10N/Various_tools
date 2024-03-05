// 
//##########################################################################
//--------------------Hourly to Salary--------------------//
//##########################################################################
var Hourly_to_Salary= function(pay, hours, weeks) {
    //variable names:
    var per_Week_Worked = (Number(pay * hours).toFixed(2))
    var annual_Salary = (Number(per_Week_Worked * weeks).toFixed(2))
    var monthly_Pay  = (Number(annual_Salary / 12).toFixed(2))
    var median_salary = (Number((annual_Salary / 57200) *100).toFixed(1)) 
    return  [per_Week_Worked, annual_Salary, monthly_Pay, median_salary]
    
    
}

let result0= Hourly_to_Salary(15, 10, 52)
console.log(`Calculation Results:\n\t Annual Salary ${result0[1]}$ \n\t Monthly Pay (avg) ${result0[2]}$ \n\t Per Week Worked ${result0[0]} \n\t % of US median salary ${result0[3]}%` )



console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Anual--------------------//
//##########################################################################

var Salary_to_Hourly_Anual = function(pay, hours, weeks) {
    //variable names:
    var hourly_pay = (Number((pay / weeks) /hours).toFixed(2))
    var per_week = (Number(pay / weeks).toFixed(2))
    var monthly_pay = (Number(pay / 12).toFixed(2))
    var median_salary = (Number((pay / 57200) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result1= Salary_to_Hourly_Anual(119, 1, 240)
console.log(`Calculation Results:\n\t Hourly Pay ${result1[0]}$ \n\t Per Week ${result1[1]}$ \n\t Monthly Pay (avg) ${result1[2]} \n\t % of US median salary ${result1[3]}%` )

console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Monthly--------------------//
//##########################################################################

var Salary_to_Hourly_Monthly = function(pay, hours, weeks) {
    //variable names:
    var monthly_pay = (Number(pay).toFixed(2))
    var per_week = (Number((pay * 12) / weeks).toFixed(2))
    var hourly_pay = (Number(per_week/ hours).toFixed(2))
    var median_salary = (Number((pay / (57200/ 12)) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result2= Salary_to_Hourly_Monthly(300, 40, 52)
console.log(`Calculation Results:\n\t Hourly Pay ${result2[0]}$ \n\t Per Week ${result2[1]}$ \n\t Monthly Pay (avg) ${result2[2]} \n\t % of US median salary ${result2[3]}%` )



console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Biweekly--------------------//
//##########################################################################

var Salary_to_Hourly_Biweekly = function(pay, hours, weeks) {
    //variable names:
    var monthly_pay = (Number(pay * 2.166666667).toFixed(2))
    var per_week = (Number(monthly_pay *12 / weeks).toFixed(2))
    var hourly_pay = (Number(per_week/ hours).toFixed(2))
    var median_salary = (Number((monthly_pay  / (57200/ 12)) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result3= Salary_to_Hourly_Biweekly(300, 40, 52)
console.log(`Calculation Results:\n\t Hourly Pay ${result3[0]}$ \n\t Per Week ${result3[1]}$ \n\t Monthly Pay (avg) ${result3[2]} \n\t % of US median salary ${result3[3]}%` )



console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Weekly--------------------//
//##########################################################################

var Salary_to_Hourly_Weekly = function(pay, hours, week) {
    //variable names:
    var monthly_pay = (Number(pay * week /12).toFixed(2))
    var per_week = (Number(pay).toFixed(2))
    var hourly_pay = (Number(pay / hours).toFixed(2))
    var median_salary = (Number((monthly_pay  / (57200 / 12)) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result4= Salary_to_Hourly_Weekly(300, 40, 52)
console.log(`Calculation Results:\n\t Hourly Pay ${result4[0]}$ \n\t Per Week ${result4[1]}$ \n\t Monthly Pay (avg) ${result4[2]} \n\t % of US median salary ${result4[3]}%` )



console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Salary to Hourly Daily--------------------//
//##########################################################################

var Salary_to_Hourly_Daily = function(pay, hours, weeks) {
    //variable names:
    var per_week = (Number(pay/ 8 * 40).toFixed(2))
    var monthly_pay = (Number(per_week * weeks /12).toFixed(2))
    var hourly_pay = (Number(pay/ (hours / 5) ).toFixed(2))
    var median_salary = (Number((monthly_pay  / (57200 / 12)) * 100).toFixed(1))
    return [hourly_pay, per_week, monthly_pay,median_salary]
     
}
let result5= Salary_to_Hourly_Daily(80, 70, 60)
console.log(`Calculation Results:\n\t Hourly Pay ${result5[0]}$ \n\t Per Week ${result5[1]}$ \n\t Monthly Pay (avg) ${result5[2]} \n\t % of US median salary ${result5[3]}%` )

console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Time and a Half Hourly--------------------//
//##########################################################################
5
var Time_and_a_Half_Hourly = function(hourly, worked_at_time_and_a_half, hours_standard){
    var Standard_hourly_rate  = hourly 
    var Time_and_a_half_rate  = hourly * 1.50
    var Time_and_a_half_pay   = hourly * (1.50*worked_at_time_and_a_half)
    var Standard_pay = hours_standard * hourly
    var Total_money_earned = Time_and_a_half_pay + Standard_pay
    return [Time_and_a_half_rate,Standard_hourly_rate , Time_and_a_half_pay,Standard_pay, Total_money_earned ]
}
let result6= Time_and_a_Half_Hourly(15,0,1 )
console.log(`Calculation Results: \n\t Time and a half rate: ${result6[0]} \n\t Standard hourly rate: ${result6[1]} \n\t Time and a half pay: ${result6[2]} \n\t Standard pay: ${result6[3]} \n\t Total money earned: ${result6[4]}`)


console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Time and a Half Daily--------------------//
//##########################################################################

var Time_and_a_Half_Daily= function(Standard_daily_pay, Hours_worked_per_standard_day, worked_at_time_and_a_half,hours_standard_worked ){
    let Standard_hourly_rate = (Standard_daily_pay/ Hours_worked_per_standard_day)
    let Time_and_a_half_rate = (Standard_hourly_rate * 1.5) 
    let Time_and_a_half_pay = (Time_and_a_half_rate * worked_at_time_and_a_half)
    let Standard_pay = (Standard_hourly_rate * hours_standard_worked )
    let Total_money_earned = (Standard_pay + Time_and_a_half_pay)
    return [Standard_hourly_rate, Time_and_a_half_rate,Time_and_a_half_pay,Standard_pay,Total_money_earned ]
}
let result7= Time_and_a_Half_Daily(15,8,1 ,2)
console.log(`Calculation Results: \n\t Standard hourly rate: ${result7[0]} \n\t Time and a half rate: ${result7[1]} \n\t Time and a half pay: ${result7[2]} \n\t Standard pay: ${result7[3]} \n\t Total money earned: ${result7[4]}`)

console.log(`\n\n`)
//##########################################################################
//--------------------Funcion Time and a Half Weekly--------------------//
//##########################################################################
/*
let Time_and_a_Half_Weekly= function(Standard_weekly_pay, Standard_daily_pay, worked_at_time_and_a_half,hours_standard_worked ){
    let Standard_hourly_rate = (Standard_daily_pay/Standard_daily_pay)
    let Time_and_a_half_rate = (Standard_hourly_rate * 1.5) 
    let Time_and_a_half_pay = (Time_and_a_half_rate * worked_at_time_and_a_half)
    let Standard_pay = (Standard_hourly_rate * hours_standard_worked )
    let Total_money_earned = (Standard_pay + Time_and_a_half_pay)
    return [Standard_hourly_rate, Time_and_a_half_rate,Time_and_a_half_pay,Standard_pay,Total_money_earned ]
    */