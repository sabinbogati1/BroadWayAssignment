
var callDadSalary = require("./DadSalary");
var callHappyDad =  require("./HappyDad");
var callBuyHonda= require("./BuyHonda");




var funDadSalary = callDadSalary();
var funHappyDad = callHappyDad();
var funBuyHonda = callBuyHonda();

funDadSalary.salaryDay(60000).then(function(textSalary){

	console.log(textSalary);

	return funHappyDad.isDadHappy("Good ");

}).then(function(moodStatus){
	console.log(moodStatus);
	return funBuyHonda.BuyHonda(5000);

})
.then(function(hondaStatus){
	console.log(hondaStatus);
})
.catch(function(msg){
	console.log(msg);
});

