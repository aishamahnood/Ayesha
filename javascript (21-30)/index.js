//Question#1
var firstName=prompt("Enter First name");
var lastName=prompt("Enter Last name");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

//Question#2
 var mobile = prompt("Enter your favourite mobile phone model");
 document.write("My favourite mobile phone is:"+mobile);
 document.write("<br>");
 var len = mobile.length;
 document.write("Length of String is: "+len);

//Question#3
var word = "Pakistani";
var index = word.indexOf("n");
document.write("String: "+word+"<br>");
document.write("The index of 'n' in the word 'Pakistani' is: " + index+"<br>");

//Question#4
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("String: "+word+"<br>");
document.write(`The last index of the letter "l" in the string "${word}" is: ${lastIndex}`);

//Question#5
var word = "Pakistani";
var charAtIndex = word.charAt(3);
document.write("String: "+word+"<br>");
document.write('The character at 3rd index in the word “Pakistani” is: '+charAtIndex+"<br>");

//Question#6
var text1 = "Ayesha";
var text2 = "Mahmood";
var result = text1.concat(text2);
document.write(result);

//Question#7
var city = "Hyderabad";
var newcity = city.replace("Hyder","Islam");
document.write(newcity);
document.write("<br>");

//Question#8
var message = "Ali and Sami are best friends.They play cricket and football together.";
var newmessage = message.replace("and","&");
document.write(newmessage+"<br>");

//Question#9
var integerString = "472";
var num = Number(integerString);
document.write("Value: "+integerString+"<br>");
document.write("Type: string"+"<br>");
document.write("Value: "+num+"<br>");
document.write("Type: number"+"<br>");

//Question#10
var Userinput = "peanuts";
var Uppercase = Userinput.toUpperCase();
document.write(Uppercase);
document.write("<br>");

//Question#11
 var Userinput = "javascript";
 var Titlecaseinput = toTitleCase(Userinput);
 document.write(Titlecaseinput);
document.write("<br>");

//Question#12
  var floatingNumString = "24.9876";
 var num = floatingNumString.toString().replace(".","");
 document.write(num);
document.write("<br>");

//Question#13
var specialChar = /[@.,!]/
var userName = prompt("Enter username");
while (specialChar.test(userName)) {
  userName = prompt("Invalid username. Please enter a valid username without any special characters [@ . , !]:");
}
alert("Your username is: " + userName);

//Question#15
var password = prompt("Enter a password:");

while (true) {
  // Check if password contains both alphabets and numbers
  let hasAlphabet = false;
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password.charAt(i))) {
      hasNumber = true;
    } 
    else {
      hasAlphabet = true;
    }
  }

  // Check if password meets all requirements
  if (hasAlphabet && hasNumber && isNaN(password.charAt(0)) && password.length >= 6) {
    console.log("Password is valid.");
    break;
  } else {
    password = prompt("Enter a valid password (must contain alphabets and numbers, not start with a number, and be at least 6 characters long):");
  }
}

//Question#16
var university = "University of Karachi";
var universityArray = university.split(" ");
document.write(universityArray+"<br>"); 

//Question#17
var str = "Pakistan";
var last = str.charAt(str.length - 1);
document.write("User input: "+str+"<br>");
document.write("Last character of input: "+last);
document.write("<br>");






