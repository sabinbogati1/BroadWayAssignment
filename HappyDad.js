module.exports = function(){


	function isDadHappy(mood){

	return new Promise(function(resolve, reject){

			var moodStatus;

			if(mood == "Bad"){

				moodStatus = " He has enough money. But his Mood is not right :( ";

				reject(moodStatus);
			}
			else{

					moodStatus = " My Dad is " + mood + " today";
					resolve(moodStatus);

			}

			

	});
}

return {

	isDadHappy:isDadHappy

}
}