// 6. Build a simple function in JavaScript that takes two arguments (numbers) and returns their product.
function total(){
  let quantity = 10;
  let rate = 300;
  let cost = quantity*rate;
  console.log(cost);
  return cost;
}
  total();


// 7. Write JavaScript code that changes the background color of the navigation bar when the mouse hovers over the bar menu.

// document.getElementById("navZone").style.onHover = "green";


// 8. Write JavaScript code that displays an alert with the message "Hello, World!" when a sign-up button is clicked.

  
  let button1 = getElementById("btn1");

  function display(){
    let message = "Hello World";
    alert(message);
  }

  button1.addEventListener('click', display);



// 10. Create an array of five numbers and write JavaScript to find the sum of these numbers
let numbers = [4,6,7,9,10];
let sumy = 0;
  
for (let i = 0; i < numbers.length; i++) {
  let result = sumy += numbers[i];
}
console.log(sumy);


// 11.  Using the for loop, iterate over an array of 10 elements and return each element as long as i is less than the length of the array
 let zeb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  for (let i = 0; i < zeb.length; i++) {
    console.log(zeb[i]);
  
  }
  