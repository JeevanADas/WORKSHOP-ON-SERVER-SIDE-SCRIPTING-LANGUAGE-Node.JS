//write a program to demonstrate the concept of events
events = require("events");
eventEmitter = new events.EventEmitter();
//set up listiner for cry event
eventEmitter.on("cry",function()
{
    console.log("i hear the cry");
});
//generate the cry event
eventEmitter.emit("cry");


