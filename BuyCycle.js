
module.exports = function(){

		function BuyCycle(cost, state){

	var cyclesta = " She bought me cycle which cost " + cost;

	state(cyclesta);

}

return{
	BuyCycle:BuyCycle
}

}