var fs = require("fs");

module.exports = function(){


    function writeFile(fileName,callback){

        fs.writeFile(fileName, "this is a sample for writing to file using fs module", function(err, result){
    
            if(err){
               callback(err);
            }
            else{
                callback(null, {
                    file: "created"
                });
            }
        
        });

 
    
}
    
    
    
    function renameFile(originalName, nameToBeRenamed,cb){
        fs.rename(originalName, nameToBeRenamed, function(err, done){
            if(err){
                cb(err);
            }
            else{
                cb(null,done);
            }
        });

  






    }



    return {

        write:writeFile,
        rename:renameFile

    }

}








