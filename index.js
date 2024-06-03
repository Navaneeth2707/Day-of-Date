import express from "express";//importing express from npm
import bodyParser from "body-parser";//importing bodyparser from npm
import { fileLoader } from "ejs";



//----------------------------------------------------------------------
const app=express();
var data= "Your responce will be here";
const dayNames = ["SUNDAY", "MONDAY", "TUESDAY" ,"WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
const port=3000;//constant
//----------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 //it used to get data from ejs.
//------------------------------------------------------
function date(req, res, next) {
    console.log(req.body);
 let date = req.body.date; //req.body.-->>get data from ejs
  let month = req.body.month;
  let year = req.body.year;
  let a = parseInt(date); //convert string in to int
  let b = parseInt(month);
  let c = parseInt(year);
  if (a >= 1 && a <= 31 && b >= 1 && b <= 12 && c >= 1111 && c <= 9999) {
  var aa=month+' '+date+' '+year;
  const valentines = new Date(aa);
const day = valentines.getDay();

data=dayNames[day];

  }
  else{
    data="Enter valid date";
  }
    next();
  }
  //it is a middleware
 //-----------------------------------------------------------------------


app.get("/",(req,res)=>{
    res.render("index.ejs",{contant:data});
}) 
  app.use(date);
  //get method
//----------------------------------------------------------------------
 app.post("/login",(req,res)=>
 {
    res.render("index.ejs",{contant:data});
 })
 //post method
 //----------------------------------------------------------------------
app.listen(port,()=>
{
    console.log(`Listening on port ${port}`);
});
//----------------------------------------------------------------------
//TO run;
// 1.cd to current folder in terminal
// 2. use-> npm 
// 3.next use->node index.js
// 4.see in chrome at http://localhost:3000/
//Make sure that ur connected to internet
