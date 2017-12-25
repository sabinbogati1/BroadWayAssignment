var http = require("http");
//var fs = require("fs");
var callFile = require("./files")();

var server = http.createServer(function(req,res){

   // console.log("i am inside server");

    if(req.url =="/"){
        res.end("you are in home page");
    }



    if(req.url== "/create"){
        

            // callFile.write(function(err,done){
            //     if(err){
            //         console.log("Error in creating file " + err);
            //     }
            //     else{
            //         res.end("file created");
            //        console.log("file created");
            //     }
            // });


            callFile.write().then(function(msg){
                res.end("file created");
                 console.log("file created");
            }).catch(function(msg){
                console.log("Error in creating file " + msg);
            });


    }

    if(req.url =="/rename"){
        



    //     callFile.rename(function(err,done){
    //         if(err){
    //             console.log("Error in renaming file " + err);
    //         }
    //         else{
    //             res.end("file Renamed");
    //            console.log("file Renamed");
    //         }
    //     });
    // }

    callFile.rename().then(function(msg){
        res.end("file Renamed");
         console.log("file Renamed");
    }).catch(function(msg){
        console.log("Error in renaming file " + msg);
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