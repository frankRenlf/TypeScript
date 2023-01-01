interface Animal {
    name: string;
    motion: string;
    gender: string;

    move(): void;
}

class Panda implements Animal {
    motion: string;
    name: string;
    gender: string;

    constructor(motion: string, name: string, gender: string) {
        this.motion = motion;
        this.name = name;
        this.gender = gender;
    }

    move(): void {
        console.log(this.motion)
    }
}

let panda1 = new Panda('run', 'lili', 'male');
console.log(panda1);
panda1.move();