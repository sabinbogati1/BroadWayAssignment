var http = require("http");

var callFile = require("./files")();

var server = http.createServer(function(req,res){

   

    if(req.url =="/"){
        res.end("you are in home page");
    }



    if(req.url== "/create"){
        
        var fileName= "Hari";

            callFile.write(fileName,function(err,done){
                if(err){
                    console.log("Error in creating file " + err);
                }
                else{
                    res.end("file created of name " + fileName);
                   console.log("file created of name " +fileName);
                }
            });


           


    }

    if(req.url =="/rename"){
        

           var original="Hari";
            var nameToBeRenamed= "Tiger";

        callFile.rename(original,nameToBeRenamed,function(err,done){
            if(err){
                console.log("Error in renaming file " + err);
            }
            else{
                res.end("Original file " + original + " is renamed to " + nameToBeRenamed);
               console.log("Original file " + original + " is renamed to " + nameToBeRenamed);
            }
        });
    }

  



  

});


server.listen(8080, function(err, done){
    console.log("i am inside server listen");

        if(err){
            console.log("Error in listening to port " +err);

        }
        else{
            console.log("Server Listening at port 8080");
        }
});