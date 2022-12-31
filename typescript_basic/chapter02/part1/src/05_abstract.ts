abstract class Car {
    name: string;
    type: string;

    protected constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    structure() {
        console.log('ssss');
    }
}

let car1 = new Car("1", "2");