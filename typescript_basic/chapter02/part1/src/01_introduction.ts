class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
}

const person1 = new Person('frank',12);

console.log(person1)