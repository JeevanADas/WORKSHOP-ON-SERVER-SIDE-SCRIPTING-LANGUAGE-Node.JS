//weite a program to read the contents of a file by sing asynchronous method
fs = require("fs");

fs.readFile("abc.txt","utf-8",function(err,data)
{
    if (err) throw err;
    console.log(data);
});