var fs = require("fs");

module.exports = function(){


    function writeFile(){

        // fs.writeFile("sample.txt", "this is a sample for writing to file using fs module", function(err, result){
    
        //     if(err){
        //        callback(err);
        //     }
        //     else{
        //         callback(null, {
        //             file: "created"
        //         });
        //     }
        
        // });

        return new Promise(function(resolve,reject){
            fs.writeFile("sample.txt", "this is a sample for writing to file using fs module", function(err, result){
                if(err){
                    reject(err);
                }
                else{

                    var result = "File Created";
                    resolve(result);
                }
        });
    
    });
    
}
    
    
    
    function renameFile(cb){
        // fs.rename("sample.txt", "prototype.txt", function(err, done){
        //     if(err){
        //         cb(err);
        //     }
        //     else{
        //         cb(null,done);
        //     }
        // });

        return new Promise(function(resolve,reject){
            fs.rename("sample.txt", "prototype.txt", function(err, result){
                if(err){
                    reject(err);
                }
                else{

                    var result = "File Renamed";
                    resolve(result);
                }
        });
    
    });






    }



    return {

        write:writeFile,
        rename:renameFile

    }

}








