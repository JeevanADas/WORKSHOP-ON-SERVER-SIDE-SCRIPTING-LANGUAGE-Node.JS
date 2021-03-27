//write a server program which will acccept a request and send a response of todays date
http= require("http");

http.createServer(function(req,res)
{
    res.writeHead(200,{"content-type": "text/html"});
    date= new Date();
    day= date.getDate();
    month= date.getMonth()+1;
    year= date.getFullYear();
    op= day +"-"+ month+"-"+year;
    res.write("<h1>"+op+"</h1>");
    res.end();

})
.listen(9000,function()
{
    console.log("Listining on port no 9000");
});
//go to crome and type localhost:9000 after running this program by using node dateserver.js