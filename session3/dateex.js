//write a epress server program called as dateex.js which will send the response of today's date to the bowser when it recieves the request
express = require("express");
app = express();

app.get("/", function(req,res)
{
    date= new Date();
    day= date.getDate();
    month= date.getMonth();
    year= date.getFullYear();

    res.send("<h1>"+day+"-"+month+"-"+year+"</h1>");
});

app.listen(9000,function(){
    console.log("listining to port 9000");
});