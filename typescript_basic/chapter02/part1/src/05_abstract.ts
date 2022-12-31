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

    abstract drive(): void;
}

class BWM extends Car {

    constructor(name: string, type: string) {
        super(name, type);
    }

    drive(): void {
        console.log(this.name,this.type);
    }

}

let bwm1 = new BWM("1", "f")
bwm1.drive();
console.log(bwm1)