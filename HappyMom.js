module.exports = function (){

	function isMomHappy(mo, cdMood){

	var mood = " My mom is " + mo ;

	cdMood(mood);

}


return {

	isMomHappy:isMomHappy
}


}