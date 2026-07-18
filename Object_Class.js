const employee = {
    name: "Pundlik",
    age: 20,
    position: "Software Engineer",
}
console.log(employee);

// added new property to the employee object

employee.name = "John";
console.log(employee);

// update the property of the employee object

employee.age = 22;
console.log(employee);

// remove the property of the employee object

delete employee.position;
console.log(employee);



class student{
    constructor(name, age, grade)
    {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

// create a new student object using the student class
const student1 = new student("Pundlik", 20, "A");
console.log(student1);

const student2 = new student("John", 22, "B");
console.log(student2);

// access the properties of the student object
console.log(student1.name);
console.log(student2.name);

// update the properties of the student object
student1.name = "Pundlik Sharma";
student1.age = 21;
student1.grade = "A+";
console.log(student1);

// remove the properties of the student object
delete student1.grade;
console.log(student1);
