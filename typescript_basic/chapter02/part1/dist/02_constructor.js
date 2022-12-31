import Person from './01_introduction';
class University {
    constructor(name, rank) {
        this.name = name;
        this.rank = rank;
        this.access = [];
    }
    offer(student) {
        this.access.push(student);
    }
}
const leeds = new University('leeds', 100);
console.log(leeds);
leeds.offer(new Person('frank', 22, 100));
console.log(leeds);
