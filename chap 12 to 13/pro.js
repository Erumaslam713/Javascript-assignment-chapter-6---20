//1 .Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

 
// Take a character as input
var char = prompt("Enter a character: ");

// Get the ASCII code of the character
var asciiCode = char.charCodeAt(0);

// // Check if the character is a number
// if (asciiCode >= 48 && asciiCode <= 57) {
//   console.log(char + " is a number");
// }
// Check if the character is an uppercase letter
 if (asciiCode >= 65 && asciiCode <= 90) {
  console.log(char + " is an uppercase letter");
}
// Check if the character is a lowercase letter
else if (asciiCode >= 97 && asciiCode <= 122) {
  console.log(char + " is a lowercase letter");
}
// If none of the above conditions are met
else {
  console.log(char + " is a special character");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// Accept two integers as input
var num1 = parseInt(prompt("Enter first integer: "));
var num2 = parseInt(prompt("Enter second integer: "));

// Check if the two integers are equal
if (num1 === num2) {
  console.log("Both integers are equal");
}
// Check if num1 is greater than num2
else if (num1 > num2) {
  console.log(num1 + " is larger");
}
// If none of the above conditions are met, num2 must be greater than num1
else {
  console.log(num2 + " is larger");
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// Take a number as input from the user
var num = parseInt(prompt("Enter a number: "));

// Check if the number is positive
if (num > 0) {
  console.log(num + " is a positive number");
}
// Check if the number is negative
else if (num < 0) {
  console.log(num + " is a negative number");
}
// If none of the above conditions are met, the number must be zero
else {
  console.log(num + " is zero");
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise


// Take a character as input
var char1 = prompt("Enter a character: ");

// Check if the character is a vowel
function isVowel(c) {
  var vowels = "aeiouAEIOU";
  return vowels.includes(c);
}

// Log the result
console.log(isVowel(char1));

// 5. Write a program 
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, showmessage “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// Store correct password in a JS variable
var correctPassword = "secret";

// Ask user to enter their password
var userInput = prompt("Enter your password: ");

// Validate the two passwords
if (userInput === null || userInput === "") {
  alert("Please enter your password");
} else if (userInput === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
// example:2

var hour = 13;
greeting = (hour < 18) ? "Good day" : "Good evening";
console.log(hour)



// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// IF...ELSE & ELSE

// Take time as input from user
var time = prompt("Enter time in 24-hour format (e.g., 1900): ");

// Convert time to hours and minutes
var hours = parseInt(time.substring(0, 2));
var minutes = parseInt(time.substring(2));

// Check the time of day
if (hours < 12) {
  console.log("Good morning!");
} else if (hours < 17) {
  console.log("Good afternoon!");
} else if (hours < 20) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}











