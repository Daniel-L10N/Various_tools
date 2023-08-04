var Time_and_a_Half_Daily= function(Standard_daily_pay, Hours_worked_per_standard_day, worked_at_time_and_a_half,hours_standard_worked ){
    let Standard_hourly_rate = (Standard_daily_pay/ Hours_worked_per_standard_day)
    let Time_and_a_half_rate = (Standard_hourly_rate * 1.5) 
    let Time_and_a_half_pay = (Time_and_a_half_rate * worked_at_time_and_a_half)
    let Standard_pay = (Standard_hourly_rate * hours_standard_worked )
    let Total_money_earned = (Standard_pay + Time_and_a_half_pay)
    return [Standard_hourly_rate, Time_and_a_half_rate,Time_and_a_half_pay,Standard_pay,Total_money_earned ]
}
result7= Time_and_a_Half_Daily(15,8,1 ,2)
console.log(`Calculation Results: \n\t Time and a half rate: ${result7[0]} \n\t Standard hourly rate: ${result7[1]} \n\t Time and a half pay: ${result7[2]} \n\t Standard pay: ${result7[3]} \n\t Total money earned: ${result7[4]}`)