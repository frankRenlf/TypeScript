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
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
export default Food;