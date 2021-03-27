//weite a node js program to read the contents of a file synchronously 
fs = require("fs");

try{
    data = fs.readFileSync("abc.txt","utf-8");
}
catch(err)
{
    console.log(err);
}
console.log(data);
