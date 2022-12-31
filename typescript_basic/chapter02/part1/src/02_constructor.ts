class College {
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    input(amount: number) {
        console.log(this, amount)
    }

}

class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class University<T> extends College {
    name: string;
    rank: number;
    access: Array<T>;


    constructor(name: string, rank: number, id: number) {
        super(id);
        this.name = name;
        this.rank = rank;
        this.access = new Array<T>;
    }

    offer(t: T) {
        this.access.push(t)
    }

}

const leeds = new University('leeds', 100, 12);

console.log(leeds);

leeds.offer(new Student('frank'))
console.log(leeds);
