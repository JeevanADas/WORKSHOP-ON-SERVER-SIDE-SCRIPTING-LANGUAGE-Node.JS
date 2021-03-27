// write an express server program called AddMVC.js which accepts the two numbers from a HTML like file and send the response to the browser
// using a view engine called handle bars. hbs engine

express = require("express");
bodyParser = require("body-parser");
app = express();

//set up the views
app.set("view engine","hbs");
app.set("views","views");
//used to parse request body
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res)
{
    res.render("add.hbs");
});

app.post("/",function(req,res)
{
    body = req.body;
    a= parseInt(body.a);
    b= parseInt(body.b);
    c= a+b;
    res.render("addresult.hbs",{a,b,c});
});

app.listen(9000,function(){
    console.log("listining to port 9000");
});
