
//       Q1.  Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 8
++a;
console.log("result");
console.log("The value of a is", + ++a);

var a = 9
++a;
console.log("The value of ++a is:" + ++a);
console.log("Now the value of a is: 11");

var a = 11
a++;
console.log("The value of a++ is 11:");
console.log("Now the value of a is:" + a++);

var a = 13
--a;
console.log("The value of --a is:" + --a);
console.log("Now the value of a is: 11");

var a = 11
a--;
console.log("The value of a-- is 11");
console.log("Now the value of a is:" + a--);




// Q2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--; -->

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

console.log("a is " + a + "<br"); console.log("b is " + b + " <br>");
console.log("result is " + result + "<br>");



// Q3. Write a program that takes input a name from user &
// greet the user.
var userName = prompt("Tell me your name! ");
alert("Hello," + userName + "! Nice to meet you.");


// Q4.Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var input = prompt("Enter a number to display its multiplication table (default is 5).")
// check if input is emptyor null, and set default value if necessary
var number;
if (input === "" || input === null) {
    number = 5;
} else {
    number = parseInt(input);
}
// Loop through 1 to 10 and display the multiplication table
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(Input + "x" + i + "=" + result);
}


//Qno.5 Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
//  d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// prompt("Enter your obtained marks")
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarksPerSubject = 100;

var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

obtainedMarks1 = parseFloat(obtainedMarks1);
obtainedMarks2 = parseFloat(obtainedMarks2);
obtainedMarks3 = parseFloat(obtainedMarks3);

var totalObtainMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtainMarks / totalMarks) = 100;
document.write("<table border ='1' style = 'width:50%; text-align:center;'>");
document.write("<tr><th>Subject</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>");

document.write("<tr><td>Total</td><td>" + totalObtainMarks + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td colspan= '3' > Percentange: " + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");
