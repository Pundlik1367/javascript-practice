// This is a simple javascript function that takes a name as input and returns a greeting message.

function greet(name){
    return "Hello, " + name + "!";
}
console.log(greet("Pundlik"));

// This is an arrow function that takes a name as input and returns a greeting message.

const greet_message1 = (name) => {
    return "Hello, " + name + "!";
}
console.log(greet_message1("Pundlik")); 

// This is an arrow function that takes a name as input and returns a greeting message using template literals.

const greet_message2 = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet_message2("pundlik"));

// This is an arrow function that takes a name as input and returns a greeting message using template literals and implicit return.

const greet_message3 = (name) => `Hello, ${name}!`;
console.log(greet_message3("pundlik"));