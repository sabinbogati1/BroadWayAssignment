function buyCar(feature){

	this.name= feature.name;
	this.color = feature.color;
	this.price = feature.price;

}


buyCar.prototype.buy = function(){

	return " Hello sir, You bought " + this.name + " which is "+ this.color
	+ " At price "+ this.price;
}





var car = [

{
	name:"Bugatee",
	color:"blue",
	price:15000
},

{
	name:"Ferrari",
	color:"Red",
	price:70000
},

{
	name:"Lambo",
	color:"purple",
	price:100000000
}

];



var sabinCar = new buyCar(car[0]);
console.log(sabinCar.buy());


car.forEach(function(item){
	var newCar= new buyCar(item);
	console.log(newCar.buy());
})