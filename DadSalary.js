module.exports = function(){


	function salaryDay(salary){


	return new Promise(function(resolve, reject){

		var text = "Today is dad's salary day. His salary is "+ salary;

		if(salary >50000 ){
			resolve(text);
		}
		else{

			text = "He has less salary so he won't buy me anything";

			reject(text);
		}

		
	});


}



return {
	salaryDay:salaryDay
}

}