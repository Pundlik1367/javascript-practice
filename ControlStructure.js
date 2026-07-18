// Control Structure Examples

// Example 1: If-Else Statement
const agee = 20;
if (agee >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

// Example 2: Switch Statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;  
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
}

// Example 3: For Loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// Example 4: While Loop
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// Example 5: Do-While Loop
let number = 0;
do {
    console.log("Number is : " + number);
    number++;
} while (number < 5);
