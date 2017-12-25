var http = require("http");
var fs= require("fs");

var callFileCreate = require('./Files');
 var funFileCreate= callFileCreate();

//es6
//import http from 'http';

var server = http.createServer(function(req, res ,next){

console.log("req",req.url);

if(req.url == "/"){
    res.end("you are inside homw page");
}

funFileCreate.createFile(req, res);

// if(req.url == "/create"){
//     fs.writeFile("sample.txt", "This is sample file ", function(err,result){

//     	if(err){
//     		console.log("err = " , err);
//     	}
//     	else{
//     		console.log("file Created");
//     		res.end("file created");

//     	}

//     });
// }


if(req.url == "/rename"){
	fs.rename("sample.txt", "prototype.txt", function(err, done){
		if(err){
			console.log("error in /rename" , err);
		}
		else{
			res.end("File rename succesfull");
			console.log("Console log rename succesfully");
		}
	});
}


if(req.url == "/about"){
    res.end("you are at about page");
}





});


server.listen(5252,function(err, result){

    if(err){
        console.log("error is :" + err);
    }
    else{
        console.log("server listening at port 5252");
    }


});


