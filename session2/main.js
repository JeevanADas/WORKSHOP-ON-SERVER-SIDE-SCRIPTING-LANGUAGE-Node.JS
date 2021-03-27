// write a js program called main.js use the circle and square module and fine out the area and perimeter of circle and square
circle = require("./circle");
square = require("./square");

radius = 5;
side = 3;

console.log("circle area = "+circle.area(radius));
console.log("circle perimeter = "+circle.perimeter(radius));

console.log("square area= "+square.area(side));
console.log("square perimeter= "+ square.perimeter(side));

