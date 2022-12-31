import Person from './01_introduction'
class University {
    name: string;
    rank: number;
    access: Array<Person>;


    constructor(name: string, rank: number) {
        this.name = name;
        this.rank = rank;
        this.access = new Array<Person>();
    }

    offer(student: Person) {
        this.access.push(student);
    }

}

const leeds = new University('leeds', 100);

console.log(leeds);

leeds.offer(new Person('frank', 22, 100))
console.log(leeds);