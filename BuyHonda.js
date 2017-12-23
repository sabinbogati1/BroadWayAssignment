module.exports = function(){

	function BuyHonda(cost){

	return new Promise(function(resolve,reject){

			var hondaStatus = "He bought me Cross Fire which cost " + cost;

			resolve(hondaStatus);

	});


	

}

return {
	BuyHonda :BuyHonda
}
}