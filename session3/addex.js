//write a express server program called as addex.js which will recieve 2 numbers from the client and send the sum of the 2 numbers to the browser
express=require("express");
app = express();

app.get("/:a/:b", function(req,res)
{
    a= parseInt(req.params.a);
    b= parseInt(req.params.b);
    c=a+b;
    res.send("<h1>"+c+"</h1>");
});

app.listen(9000,function()
{
    console.log("listining to port 9000");
});
//in crome enter localhost:9000/num a(any num)/num b(any num)