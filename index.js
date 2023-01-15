const express= require("express"); 
const port = 8000; 
const app = express(); 
app.listen(port, function(err){
    if(err){
        console.log("error listening to port"); 
        return; 
    }
    console.log("sucessfully listienin gto port", port); 
})