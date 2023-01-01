(function () {
    interface Animal {
        name: string;
        motion: string;
        gender: string;

        move(): void;
    }

    class Panda {
        private readonly _motion: string;
        name: string;
        gender: string;

        constructor(motion: string, name: string, gender: string) {
            this._motion = motion;
            this.name = name;
            this.gender = gender;
        }


        get motion(): string {
            return this._motion;
        }

        move(): void {
            console.log(this._motion)
        }
    }

    let panda1 = new Panda('run', 'lili', 'male');
    panda1.name = '1'
    console.log(panda1);
    panda1.move();
})()