const express = require("express");
const app = express();
const path = require("path");
const port  = process.env.PORT || 8000 ;
staticpath = path.join(__dirname,"../public");

app.use(express.static(staticpath));
app.set("view engine","hbs");

app.get("/",(req,res)=>{
 res.render("home");
});
app.get("/about",(req,res)=>{
 res.render("about");
});
app.get("/weather",(req,res)=>{
 res.render("weather");
});
app.get("*",(req,res)=>{
 res.send("404 error");
});
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})