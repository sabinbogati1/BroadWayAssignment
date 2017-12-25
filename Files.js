module.exports =function(){
	var http = require("http");
	var fs= require("fs");
	function createFile(req, res){
		if(req.url == "/create"){
    fs.writeFile("sample.txt", "This is sample file ", function(err,result){

    	if(err){
    		console.log("err = " , err);
    	}
    	else{
    		console.log("file Created");
    		res.end("file created");

    	}

    });
}
	}


	return {
		createFile:createFile
	}

	
	
}