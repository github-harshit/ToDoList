const express= require("express"); 
const port = 8000; 
const app = express(); 
 
 app.set("view engine", "ejs"); 
app.set("views", "./views"); 
 app.use(express.static("assets")); 
  app.use(express.urlencoded()); 
  

 app.post("/create_task", function(req, res){
    console.log(req.body); 
     return res.redirect("/"); 

 })

app.get("/", function(req, res){
    return res.render("home", {
        title: "ToDoList"
    })
})

app.listen(port, function(err){
    if(err){
        console.log("error listening to port"); 
        return; 
    }
    console.log("sucessfully listening to port", port); 
}); 
