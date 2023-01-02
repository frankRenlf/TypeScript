class Snake {

    head: HTMLElement;
    sectionList: HTMLCollection;
    element: HTMLElement;

    constructor() {
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
        if (this.X === value) return;
        if (value < 0 || value > 290) {
            throw new Error('Hit the wall!')
        }
        this.checkHeadSections();
        this.moveSections();
        this.head.style.left = value + 'px';
    }

    set Y(value: number) {
        if (this.Y === value) return;
        if (value < 0 || value > 290) {
            throw new Error('Hit the wall!')
        }
        this.checkHeadSections();
        this.moveSections();
        this.head.style.top = value + 'px';
    }

    restore() {
        alert('restart game')
        for (let i = this.sectionList.length - 1; i > 0; i--) {
            this.element.removeChild(this.sectionList[i]);
        }
    }

    addSection() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
        console.log(this.head);
        console.log(this.sectionList);
    }

    moveSections() {
        for (let i = this.sectionList.length - 1; i > 0; i--) {
            let X = (this.sectionList[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.sectionList[i - 1] as HTMLElement).offsetTop;
            (this.sectionList[i] as HTMLElement).style.left = X + 'px';
            (this.sectionList[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadSections() {
        for (let i = 4; i < this.sectionList.length; i++) {
            let section = this.sectionList[i] as HTMLElement;
            if (this.X === section.offsetLeft && this.Y === section.offsetTop) {
                throw new Error('Hit the body!');
            }
        }
    }

}

export default Snake;