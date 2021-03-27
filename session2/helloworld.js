http= require("http");

http.createServer(function(req,res)
{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>hello world</h1>");
    res.end();
})
.listen(9000,function()
{
    console.log("Listining on port 9000");
});
//go to crome and type "localhost:9000"