//Question#1
var integer = prompt("Enter a positive integer");
document.write("number: "+integer+"<br>");
var scoreAvg = Math.round(integer);
document.write("round number: "+scoreAvg+"<br>");
var scoreAvg = Math.ceil(integer);
document.write("ceil number: "+scoreAvg+"<br>");
var scoreAvg = Math.floor(integer);
document.write("floor number: "+scoreAvg+"<br>");

//Question#2
var integer = prompt("Enter a negative integer");
document.write("number: "+integer+"<br>");
var scoreAvg = Math.round(integer);
document.write("round number: "+scoreAvg+"<br>");
var scoreAvg = Math.ceil(integer);
document.write("ceil number: "+scoreAvg+"<br>");
var scoreAvg = Math.floor(integer);
document.write("floor number: "+scoreAvg+"<br>");

//Question#3
var a = -4;
var x = Math.abs(a);
document.write("The absolute value is: "+x+"<br>");

//Question#4
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("The value of the dice is: " + diceValue+"<br>");

//Question#6
var randomNum ;
randomNum = Math.ceil(Math.random() * 100);
document.write("Random number between 1 and 100: " + randomNum+"<br>");

//Question#7
var userName = prompt("Enter your weight in kilograms");
document.write("The weight of user is: "+userName+"Kilograms"+"<br>");

//Question#8
var numbers = 9;
var userName = prompt("Enter a number between 1 and 10");
if(userName==9){
    document.write("Congratz user");
}
else{
    document.write("try again");
}