"use strict";
(function () {
    class Panda {
        constructor(motion, name, gender) {
            this._motion = motion;
            this.name = name;
            this.gender = gender;
        }
        setMotion(value) {
            this._motion = value;
        }
        get motion() {
            return this._motion;
        }
        move() {
            console.log(this._motion);
        }
    }
    let panda1 = new Panda('run', 'lili', 'male');
    panda1.name = '1';
    panda1.setMotion("set");
    console.log(panda1);
    panda1.move();
    console.log(panda1.motion);
})();
