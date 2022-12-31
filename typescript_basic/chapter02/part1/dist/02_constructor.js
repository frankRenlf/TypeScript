"use strict";
class College {
    constructor(id) {
        this.id = id;
    }
    input(amount) {
        console.log(this, amount);
    }
}
class Student {
    constructor(name) {
        this.name = name;
    }
}
class University extends College {
    constructor(name, rank, id) {
        super(id);
        this.name = name;
        this.rank = rank;
        this.access = new Array;
    }
    offer(t) {
        this.access.push(t);
    }
    input(amount) {
        console.log(amount * 10);
    }
}
const leeds = new University('leeds', 100, 12);
console.log(leeds);
leeds.offer(new Student('frank'));
console.log(leeds);
leeds.input(22);
