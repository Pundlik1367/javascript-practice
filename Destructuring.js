// ---- Destructuring Objects ----

const user = {
    name: "John Doe",
    age: 30,    
}

// without destructuring
console.log(user.name);


// with destructuring - Method 1
const user = { name, age } = {name: "John Doe", age: 30,}
console.log(name);
console.log(age);

// with destructuring - Method 2
const { name: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// with destructuring - Method 3
const { name, age } = user;
console.log(name);
console.log(age);

// ---- Destructuring Arrays ----

const user1 = ["Pundlik", "John", "Jane"];

// without destructuring
console.log(user1[0]);
console.log(user1[1]);
console.log(user1[2]);

// with destructuring method 1
const [pundlik, john, jane] = ["Pundlik", "John", "Jane"];

console.log(pundlik);
console.log(john);
console.log(jane);

// with destructuring method 2
const [pundlik, john, jane] = user1;

console.log(pundlik);
console.log(john);
console.log(jane);

// with destructuring method 3
const [firstName, secondName, thirdName] = user1;
console.log(firstName);
console.log(secondName);
console.log(thirdName);