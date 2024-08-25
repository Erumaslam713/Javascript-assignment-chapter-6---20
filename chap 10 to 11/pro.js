// Q1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

varcity =prompt("Enter your city name");
if(city ==="Karachi") {
    alert("Welcome to city of lights");
}
// Q2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = promp = ("Gender");
if (gender == "male") {
    alert("Good Morning Sir");

}
else if (gender == "female") {
    alert("Good Morning Ma'am");
}
// Q3 Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green move now


var signalColor=prompt("Please enter the color of traffic signal");
if(signalColor=="Red") {
    alert("Must Stop");
}else if(signalColor=="Yellow") {
    alert("Ready to move");
}
else if(signalColor=="Green") {
    alert("Move now");
}


// Q4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    
var litres= prompt("Remaining your fuel");
if(litres < 0.25) {
    alert("Please refill the fuel in your car");
}




// Q5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } True

// User Input & Conditional Statement | JAVASCRIPT



// b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}  False
// c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} 
//  condition 2 & 4 IS True
// d.
 var materialCost = 20000;
// var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e.
 if (true){
alert("True");
} True
if (false){
alert("False");
}
//  condition True is True

// User Input & Conditional Statement | JAVASCRIPT


// f. 
if("car" < "cat") {
alert("car is smaller than cat");
}
//  False

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:

var marks1 = prompt("Enter marks obtained in subject 1:");
var marks2 = prompt("Enter marks obtained in subject 2:");
var marks3= prompt("Enter marks obtained in subject 3:");
var total_marks = prompt("Enter total marks for each subject:");

marks1 = parseFloat(marks1);
marks2 = parseFloat(marks2);
marks3 = parseFloat(marks3);
total_marks = parseFloat(total_marks1);

var obtained_marks = marks1 + marks2 + marks3;
var percentage =(obtained_marks / (total_marks * 3)) * 100;



var grade;
var remarks;

if (percentage >= 80) {
    grade = "A1";
    remarks ="Excellent"
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good"
}else if(percentage >= 60) {
    grade = "B";
    remarks ="You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry"
}
document.write("<h1>Marks Sheet</h1>" + "<br>");
document.write("total Marks: " + (Total_marks * 3) + "<br>");
document.write("Marks Obtained: " + obtained_marks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.

// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


var secretNumber = Math.floor(Math.rendom() * 10) + 1;

var guess = prompt("Guess the secret number (between 1 and 10):")

if (parseInt(guess) === secretNumber) {
    alert("Congratulation! You guessed the right number.");
}else {
    alert ("Sorry , the correct number was" + secretNumber + ". Try again!");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var  number = parseInt(document.getElementById("numberInput").ariaValueMax.trim(),10);
var messsage = number % 3 === 0? "The number is divisible by 3." : "The number is not divisible by 3.";
document.getElementById("resultMessage").innerText = message;
var number = number % 3 ;
var message = number % 3 === 0;


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var number = prompt("Enter a numbero: ");
number = parseInt (number);
var result;
if(number % 2 === 0 ) {
    result = "The number" + number + " is even.";
} else {
    result = "The number" + number + " is odd.";
}
document.write(result);


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T >40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


var temperature = prompt("Enter the temperature: ");
temperature = parseFloat (temperature);
var message;
if(temperature >40){
    message ="It is too hot outside.";
}else if ( temperature >30){
    message ="The weather today is normal.";
}else if(temperature >20){
    message = "Today's weather is cool.";
}else if (temperature >10){
    message="OMG! Today's weather is so cool. ";
}else{
    message = "It's very cold outside.";
}

document.write(message);


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


var num1=prompt("Enter the first number: ");
var num2=prompt("Enter the second number: ");
var operation= prompt("Enter the operation (+, -, *, /, %,) :");
 num1 = parseFloat(num1);
 num2 = parseFloat(num1);

 var result;
 if(operation === "+"){
    result = num1 +num2 ; 
 }else if (operation === "-"){
    result = num1 - num2;
 }else if (operation === "*"){
    result = num1 * num2;
 }else  if(operation === "/") {
    result= num1 % num2;
 }else if (operation === "%") {
    result = num1 % num2;
 }else {
    result = "Invaild operation!";
}
document.write("The result :" + result);

