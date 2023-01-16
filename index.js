const express= require("express"); 
const port = 8000; 
const app = express(); 
const db = require("./models/mongoose"); 
 const Task= require("./models/task"); 
 app.set("view engine", "ejs"); 
app.set("views", "./views"); 
 app.use(express.static("assets")); 
  app.use(express.urlencoded()); 
  

 app.post("/create_task", function(req, res){
    Task.create({
        desc : req.body.desc, 
        category : req.body.category,
        date : req.body.date 
    }, function(err, newTask){
        if(err){
            console.log("error while creating the document in collection "); 
            return; 
        }
        return res.redirect("back"); 
    })
      

 })
 var task_list= []; 

app.get("/", function(req, res){
    Task.find({}, function(error, tasky){
        if(error){
            console.log("error in getting the data from databse"); 
            return; 
        }
        for(let i of tasky){
           var date = new Date(i.date);
           i.date = date; 
           
         
        
        }
        
         task_list = tasky; 
        return res.render("home", {
            title:"Todo List", 
            task_list: task_list
        
        })
    })
})

app.get("/delete_task/", function(req, res){
    let id = req.query.id; 
    Task.findOneAndRemove(id, function(err){
        if(err){
            console.log("error while deleting"); 
            return; 
        }
        return res.redirect("/"); 
    })
    
})

app.listen(port, function(err){
    if(err){
        console.log("error listening to port"); 
        return; 
    }
    console.log("sucessfully listening to port", port); 
}); 
