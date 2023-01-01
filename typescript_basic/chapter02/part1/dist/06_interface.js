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
export default Panda;
