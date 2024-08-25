// // 1. Declare an empty array using JS literal notation to store
// // student names in future.
var studentNames = [];

console.log(studentNames); // prints []


// This code creates an empty array called studentNames. You can later add student names to this array using the push() method, like this:


studentNames.push("John Doe");
studentNames.push("Jane Smith");
studentNames.push("Bob Johnson");

console.log(studentNames); // prints ["John Doe", "Jane Smith", "Bob Johnson"]
// // 2. Declare an empty array using JS object notation to store
// // student names in future.
var studentNames1 = new Array();

console.log(studentNames1); // prints []


// This code creates an empty array called studentNames using the Array constructor. You can later add student names to this array using the push() method, like this:


studentNames1.push("John Doe");
studentNames1.push("Jane Smith");
studentNames1.push("Bob Johnson");

console.log(studentNames1); // prints ["John Doe", "Jane Smith", "Bob Johnson"]

// // 3. Declare and initialize a strings array.
var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

console.log(colors);


// This code creates an array called colors and initializes it with five string elements. The console.log() statement prints the entire array to the console.

// Example output:


["Red", "Green", "Blue", "Yellow", "Purple"]


// You can also use the new Array() constructor to declare and initialize the array:

// // 4. Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);


// This code creates an array called numbers and initializes it with ten numeric elements. The console.log() statement prints the entire array to the console.

// Example output:


[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// You can also use the new Array() constructor to declare and initialize the array:

var numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// But the literal notation [] is generally preferred for its conciseness and readability.

// Note: You can also initialize an array with a single number, which will create an array with that many empty elements:


var numbers = new Array(10);
console.log(numbers); // prints [empty x 10]
// // 5. Declare and initialize a boolean array.

var isAdmin = [true, false, true, false, true];

console.log(isAdmin);


// // 6. Declare and initialize a mixed array.
var mixedArray = [1, "hello", true, null, undefined, {name: "John"}, [1, 2, 3]];

console.log(mixedArray);



// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser

 // Declare and initialize an array of education qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Function to display qualifications
function displayQualifications() {
  // Get the element where the qualifications will be displayed
  var qualificationList = document.getElementById("qualification-list");
  
  // Clear the previous list
  qualificationList.innerHTML = "";
  
  // Loop through the qualifications array
  qualifications.forEach((qualification) => {
    // Create a new list item
    var listItem = document.createElement("li");
    
    // Add the qualification text to the list item
    listItem.textContent = qualification;
    
    // Add the list item to the qualification list
    qualificationList.appendChild(listItem);
  });
}

// Call the function to display qualifications
displayQualifications();


// HTML code to display the qualifications:


{/* <h2>Eligible Qualifications:</h2>
<ul id="qualification-list"></ul> */}


// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like

// Store student names in an array
var studentNames = ["Alice", "Bob", "Charlie"];

// Store student scores in another array
var studentScores1 = [450, 420, 490];

// Function to display scores and percentages
function displayResults() {
  // Loop through the student names and scores
  for (var i = 0; i < studentNames1.length; i++) {
    // Calculate the percentage
    var percentage = (studentScores1[i] / 500) * 100;
    
    // Display the score and percentage
    console.log(`${studentNames1[i]} scored ${studentScores1[i]} marks out of 500, which is ${percentage.toFixed(2)}%`);
  }
}
// Call the function to display results
displayResults();

// // 9. Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then

// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

//Initialize an array with color names
var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Display the array elements in the browser
document.write("Initial Array: " + colors + "<br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array
var colorToAddAtBeginning = prompt("Enter a color to add at the beginning:");
colors.unshift(colorToAddAtBeginning);
document.write("Array after adding color at beginning: " + colors + "<br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array
var colorToAddAtEnd = prompt("Enter a color to add at the end:");
colors.push(colorToAddAtEnd);
document.write("Array after adding color at end: " + colors + "<br>");

// c. Add two more colors to the beginning of the array
colors.unshift("Orange", "Pink");
document.write("Array after adding two colors at beginning: " + colors + "<br>");

// d. Delete the first color in the array
colors.shift();
document.write("Array after deleting first color: " + colors + "<br>");

// e. Delete the last color in the array
colors.pop();
document.write("Array after deleting last color: " + colors + "<br>");

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("Array after adding color at desired position: " + colors + "<br>");

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index
var indexToDelete = parseInt(prompt("Enter the index to delete colors:"));
var countToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, countToDelete);
document.write("Array after deleting colors: " + colors + "<br>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// Store student scores in an array
var studentScores = [85, 92, 78, 95, 88, 76, 95, 89];

// Display the unsorted array
console.log("Unsorted Array: " + studentScores);

// Sort the array in ascending order
studentScores.sort((a, b) => a - b);

// Display the sorted array
console.log("Sorted Array: " + studentScores);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// Initialize an array with city names
var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego"];

// Display the cities array
console.log("Cities Array: " + cities);

// Copy 3 array elements from cities array to selectedCities array
var selectedCities = cities.slice(0, 3);

// Display the selectedCities array
console.log("Selected Cities Array: " + selectedCities);


// 12. Write a program to create a single string from the
// below mentioned array:

// Initialize the array
var arr = ["This ", " is ", " my ", "cat"];

// Use the join() method to create a single string
var sentence = arr.join("");

// Display the resulting string
console.log(sentence);


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// Create a new array
var fifoArray = [];

// Store values one by one
fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");
fifoArray.push("Value 4");
fifoArray.push("Value 5");

// Access the values in the order they were stored
for (var i = 0; i < fifoArray.length; i++) {
  console.log(fifoArray[i]);
}


// // 14. Create a new array. Store values one by one in such a way

// // that you can access the values in reverse order. (Last In-
// // First Out)
// Create a new array
var lifoArray = [];

// Store values one by one
lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");
lifoArray.push("Value 4");
lifoArray.push("Value 5");

// Access the values in reverse order (LIFO)
for (var i = lifoArray.length - 1; i >= 0; i--) {
  console.log(lifoArray[i]);
}

// // 15. Write a program to store phone manufacturers (Apple,
// // Samsung, Motorola, Nokia, Sony & Haier) in an array.
// // Display the following dropdown/select menu in your
// // browser using document.write() method:
// Store phone manufacturers in an array
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Display the dropdown/select menu
document.write("<select>");
document.write("<option>Select a manufacturer</option>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");