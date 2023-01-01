class Snake {

    head: HTMLElement;
    section:HTMLCollection;

    constructor(head: HTMLElement) {
        this.head = document.querySelector('#snake>div')!;
    }
}

export default Snake;