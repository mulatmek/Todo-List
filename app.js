const express = require("express");
const bodyParser= require("body-parser");
const app = express();
const date = require(__dirname+"//date.js");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const items=[];
const workItems =[];

app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("list",{listTitle:date.getDate(),newListItems:items});
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