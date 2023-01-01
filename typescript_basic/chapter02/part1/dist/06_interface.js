"use strict";
class Panda {
    constructor(motion, name, gender) {
        this.motion = motion;
        this.name = name;
        this.gender = gender;
    }
    move() {
        console.log(this.motion);
    }
}
let panda1 = new Panda('run', 'lili', 'male');
console.log(panda1);
panda1.move();
