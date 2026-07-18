// example of spread operator in JavaScript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// example of rest operator in JavaScript
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// example of using spread operator to copy an object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);

// example of using rest operator to destructure an object
const { a, b, ...rest } = obj2;
console.log(a);
console.log(b);
console.log(rest);



