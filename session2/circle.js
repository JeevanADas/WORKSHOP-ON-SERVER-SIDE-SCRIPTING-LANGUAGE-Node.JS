//write a program circle.js which has 2 funtions called as area and perimemter
function area(radius){
    return Math.PI * Math.pow(2,radius);
}
function perimeter(radius){
    return 2* Math.PI * radius;
}

module.exports = {area, perimeter};
