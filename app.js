const express = require("express");
const bodyParser= require("body-parser");

const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

mongoose.connect('mongodb://localhost:27017/todolistDB',{useNewUrlParser:true});
const itemsSchema = {
    name:String
};
const Item= mongoose.model("Item",itemsSchema);



app.get("/",function(req,res){
    Item.find({},function(err,items){
        let names =[]
         if(err) console.log(err);
         else{

            res.render("list",{listTitle:"Today",newListItems: items.map((item)=>item.name)});
         }
    });
    
});

app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.list==="work List"){
        workItems.push(item);
        res.redirect("/work");
     } else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"work List",newListItems:workItems});
});

app.post("/work",function(req,res){
    let item = rerq.body.newItem;
    workItems.push(item);
})

app.get("/about",function(req,res){
    res.render("about");
});

  

app.listen(3000,function(){
    console.log("Server started on port 3000");
});


  