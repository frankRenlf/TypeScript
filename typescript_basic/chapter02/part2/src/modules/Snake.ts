class Snake {

    head: HTMLElement;
    sectionList: HTMLCollection;
    element: HTMLElement;

    constructor(head: HTMLElement) {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div')!;
        this.sectionList = this.element.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        this.head.style.left = value + 'px';
    }

    set Y(value: number) {
        this.head.style.top = value + 'px';
    }

    addSection() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

}

export default Snake;