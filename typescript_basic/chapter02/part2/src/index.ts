import './style/index.less'

class Food {
    // define el
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    // define position
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    // modify position
    change() {
        this.element.style.left = String(Math.round(Math.random() * 29) * 10);
        this.element.style.top =
    }
}

const food = new Food();
console.log(food.X, food.Y)