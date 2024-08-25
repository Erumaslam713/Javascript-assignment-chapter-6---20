// 1.Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 


var multidimensionalArray = [];
for (let i = 0; i < 5; i++) {
  document.write(multidimensionalArray.push([]))
}
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];




// 3. Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++) {
  console.log(i);
}


// This code uses a for loop to iterate from 1 to 10, and prints each number to the console using console.log().

// Alternatively, you can use a while loop:


var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}


// Or, you can use the Array.from() method:


Array.from({ length: 10 }, (_, i) => console.log(i + 1));

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


// Take table number and length as input from user
var tableNumber = parseInt(prompt("Enter the table number:"));
var tableLength = parseInt(prompt("Enter the table length:"));

// Print multiplication table
console.log(`Multiplication table of ${tableNumber}:`);
for (var i = 1; i <= tableLength; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];


for (var i = 0; i < fruits.length; i++) {
  console.log(`Index: ${i}, Fruit: ${fruits[i]}`);
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// Counting series
console.log("Counting series:");
for (var i = 1; i <= 15; i++) {
  console.log(i);
}

// Reverse counting series
console.log("\nReverse counting series:");
for (var i = 10; i >= 1; i--) {
  console.log(i);
}

// Even series
console.log("\nEven series:");
for (var i = 0; i <= 20; i += 2) {
  console.log(i);
}

// Odd series
console.log("\nOdd series:");
for (var i = 1; i <= 19; i += 2) {
  console.log(i);
}

// Series 2k
console.log("\nSeries 2k:");
for (var i = 2; i <= 20; i += 2) {
  console.log(`${i}k`);
}


// 7. You have an array

// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter an item to search: ");

var found = bakeryItems.includes(userInput);

if (found) {
  alert(`${userInput} is not available at index 2 in our bakery`);
} else {
  alert(`${userInput} We are sorry. pastry is not available in our bakery`);
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];

var largestNumber = Math.max(...A);

console.log("The largest number in the array is:", largestNumber);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var num = [24, 53, 78, 91, 12];

var smallestNumber = Math.min(...num);

console.log("The smallest number in the array is:", smallestNumber);

// 10. Write a program to print multiples of


for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
