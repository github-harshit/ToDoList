const mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost:27017/task_list_db"); // to connect mongoose with database 
 const db = mongoose.connection; 
 db.on("error", console.error.bind(console, "error to db")); 
 db.once("open", function(){
    console.log("sucessfully connected to database"); 
 }); 
 


