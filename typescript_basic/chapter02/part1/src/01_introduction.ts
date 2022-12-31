class Person {
    name: string;
    age: number;

    energy: number

    constructor(name: string, age: number, energy: number) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    };

    run(length: number, time: number) {
        let consume = length * 0.8 + time * 0.2
        this.energy -= consume;
        return this.energy
    }
}

const person1 = new Person('frank', 12, 100);
console.log(person1.run(2, 3));