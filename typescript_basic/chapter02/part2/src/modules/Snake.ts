class Snake {

    head: HTMLElement;


    constructor(head: HTMLElement) {
        this.head = document.querySelector('#snake>div')!;
    }
}

export default Snake;