// returns a greeting message.

function greet(name){
    return "Hello, " + name + "!";
}
console.log(greet("Pundlik"));


// This is an arrow function

const greet_message1 = (name) => {
    return "Hello, " + name + "!";
}
console.log(greet_message1("Pundlik")); 


//using template literals.

const greet_message2 = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet_message2("pundlik"));


// using template literals and implicit return.

const greet_message3 = (name) => `Hello, ${name}!`;
console.log(greet_message3("pundlik1"));


// passing function as an argument to another function.

const processName = (name, greetFunction) => {
    return greetFunction(name);
}
console.log(processName("Rohan", greet_message3));

// function inside another function.

const outerFunction = (name) => {
    const innerFunction = (name) => {
        return `Hello, ${name}!`;
    }   
    return innerFunction(name);
}
console.log(outerFunction("Pundlikk"));