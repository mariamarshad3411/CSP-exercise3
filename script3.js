// Part 1: Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);    
console.log("Subtraction:", num1 - num2); 
console.log("Multiplication:", num1 * num2); 
console.log("Division:", num1 / num2);    
console.log("Modulus:", num1 % num2);     

// Part 2: Relational Operators
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 less than num2?", num1 < num2);
console.log("Is num1 greater than or equal to num2?", num1 >= num2);
console.log("Is num1 less than or equal to num2?", num1 <= num2);
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 not equal to num2?", num1 !== num2);

// Part 3: Logical Operators
let isSunny = true;
let isWeekend = false;

console.log("Is it sunny and weekend?", isSunny && isWeekend);
console.log("Is it sunny or weekend?", isSunny || isWeekend);
console.log("Is it not sunny?", !isSunny);

// Part 4: Assignment Operators
let score = 50;
score += 10;  
console.log("After += 10:", score);

score -= 5;   
console.log("After -= 5:", score);

score *= 2;   
console.log("After *= 2:", score);

// Part 5: User Interaction
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");

console.log("User's Name:", userName);
console.log("User's Age:", userAge);
