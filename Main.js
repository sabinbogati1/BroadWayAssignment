//var callMomSalary =  require('./MomSalary')();
var callMomSalary =  require('./MomSalary');

var callHappyMom = require('./HappyMom');

var callBuyCycle = require('./BuyCycle');



var funMomSalary = callMomSalary();
var funHappyMom = callHappyMom();
var funCallBuyCycle = callBuyCycle();


funMomSalary.salaryDay(50000,function cbSalary(salary){

	console.log(salary);
});


funHappyMom.isMomHappy("Happy" , function herMood(status){

	console.log(status);
})


funCallBuyCycle.BuyCycle(15000 , function cycle(state){

	console.log((state));
})
