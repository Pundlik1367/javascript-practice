// This is an array of names that will be used to test the greet_message3 function.

const namearray = ["Rahul", "Amol", "Aniket", "Suresh", "Ganesh"];

namearray.forEach((name) => {
    const message = `Hello, ${name}!`;
    console.log(message);
});

console.log(namearray);

// remove the last element from the namearray and log the updated array to the console.

namearray.pop();
console.log(namearray);

// remove the first element from the namearray and log the updated array to the console.

namearray.shift();
console.log(namearray);

// add a new name to the end of the namearray and log the updated array to the console.

namearray.push("Ganesh");
console.log(namearray);

// add a new name to the beginning of the namearray and log the updated array to the console.

namearray.unshift("Rahul");
console.log(namearray);

// This is a function that takes an array of names as input and returns a new array with the names in uppercase.

const uppercaseNames = (names) => {
    return names.map((name) => name.toUpperCase());
}
console.log(uppercaseNames(namearray));

// This is a function that takes an array of names as input and returns a new array with the names in lowercase.

const lowercaseNames = (names) => {
    return names.map((name) => name.toLowerCase());
}   
console.log(lowercaseNames(namearray));

// This is a function that takes an array of names as input and returns a new array with the names sorted in alphabetical order.

const sortNames = (names) => {
    return names.sort();
}
console.log(sortNames(namearray));

// This is a function that takes an array of names as input and returns a new array with the names sorted in reverse alphabetical order.

const reverseSortNames = (names) => {
    return names.sort().reverse();
} 
console.log(reverseSortNames(namearray));

// filter the names that start with the letter 'A' and log the updated array to the console.

const filterNames = (names) => {
    return names.filter((name) => name.startsWith("A"));
}   
console.log(filterNames(namearray));

// This is a function that takes an array of names as input and returns a new array with the names that have more than 5 characters.

function checkLength(name)
{
    return name.length > 5;
}
const result1 = namearray.filter(checkLength);
console.log(result1);

//OR

const checkLength1 = (name) => {
    return name.length > 5;
}
const result2 = namearray.filter(checkLength1);
console.log(result2);

//OR

const result3 = namearray.filter((name) => name.length > 5);
console.log(result3);

//OR

const filterLongNames = (names) => {
    return names.filter((name) => name.length > 5);
}
console.log(filterLongNames(namearray));




