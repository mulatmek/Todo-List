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
const listSchema ={
    name:String,
    items:[]
}
const Item= mongoose.model("Item",itemsSchema);
const List = mongoose.model("List",listSchema);
const Item1 = new Item({
    name:"Welcome to  your todolist!"
});
const Item2 = new Item({
    name:"Hit the  + button to add new item"
});
const Item3 = new Item({
    name:"<-- Hit this to remove item"
});
defaultItems=[Item1,Item2,Item3];

app.get("/",function(req,res){
    
    Item.find({},function(err,foundItems){
        if(foundItems.length===0){
            Item.insertMany(defaultItems,function(err){
                if(err){
                    console.log(err);
                }else{
                  console.log("Successfully saved default items to DB. ")
                }
            });
        res.redirect("/");
        }else{
            if(err){
                console.log(err);
            }else{
               res.render("list",{listTitle:"Today",newListItems: foundItems});
            }
        }
      
    });
    
});


app.post("/",function(req,res){
    const itemName = req.body.newItem;
    const item = new Item({name:itemName}).save();
    res.redirect("/");
});

app.post("/delete",function(req,res){
    const checkedItemId =req.body.checkbox;
    Item.findByIdAndRemove(checkedItemId,function(err){
        if(!err) console.log("item deleted Successfully");
    })
    res.redirect("/");
});

app.get("/:customListName",function(req,res){

    const customListName= req.params.customListName;
    List.findOne({"name":customListName},function(err,resualts){
        if(!resualts){
            new List({
                name:customListName,
                items:defaultItems
            }).save()
        }else{
            console.log("Exist");
        }

    });
   
   
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


  