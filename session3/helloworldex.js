//write a program in server program in express called as helloworldex.js when the request is received send the response hello world to the bowser
express = require("express");
app = express();
app.get("/", function(req,res)
{
    res.send("<h1>hello world</h1>");
});

app.listen(9000,function(){
    console.log("listining to port 9000");
});