"use strict";
class Car {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    structure() {
        console.log('ssss');
    }
}
class BWM extends Car {
    constructor(name, type) {
        super(name, type);
    }
    drive() {
        console.log(this.name, this.type);
    }
}
let bwm1 = new BWM("1", "f");
bwm1.drive();
console.log(bwm1);
