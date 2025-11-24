/*
Homework 4: Employee → Manager
Goal: Use super() and share properties.
Requirements:
Base Employee:
properties: name, salary
method: info()
Manager:
properties: name, salary, department
method: info() must add department info
I boni upload te section Object-oriented Programming in JavaScript ne LMS
*/

class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }

    info() {
        console.log("Name: " + this.#name);
        console.log("Salary: " + this.#salary);
    }
}

class Manager extends Employee {
    #department;

    constructor(name, salary, department) {
        super(name, salary); 
        this.#department = department;
    }

    getDepartment() {
        return this.#department;
    }

    info() {
        console.log("Name: " + this.getName());
        console.log("Salary: " + this.getSalary());
        console.log("Department: " + this.#department);
    }
}

const emp1 = new Employee("Person1", 1200);
console.log("Employee Info");
emp1.info();

console.log("\n Manager Info");
const manager1 = new Manager("Person2", 2500, "IT Department");
manager1.info();


