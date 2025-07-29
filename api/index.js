const express = require("express");
const app = express();
const path=require("path");
const port = 4004;
const ejs = require("ejs");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.set("views",path.join(__dirname,"../views"));
// 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

app.get("/", (req,res)=>{
    res.render("home");
})


module.exports=app;