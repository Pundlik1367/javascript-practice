// ---- Destructuring Objects ----

const user1 = {
    name: "John Doe",
    age: 30,    
}

// without destructuring
console.log(user1.name);


// with destructuring - Method 1
const { name, age } = {name: "John Doe", age: 30,}
console.log(name);
console.log(age);

// with destructuring - Method 2
const { name: userName, age: userAge } = user1;
console.log(userName);
console.log(userAge);

// with destructuring - Method 3
const { Fullname, Currentage } = user1;
console.log(Fullname);
console.log(Currentage);

// ---- Destructuring Arrays ----

const user2 = ["Pundlik", "John", "Jane"];

// without destructuring
console.log(user2[0]);
console.log(user2[1]);
console.log(user2[2]);

// with destructuring method 1
const [pundlik, john, jane] = ["Pundlik", "John", "Jane"];

console.log(pundlik);
console.log(john);
console.log(jane);

// with destructuring method 2
const [firstName, secondName, thirdName] = user2;
console.log(firstName);
console.log(secondName);
console.log(thirdName);