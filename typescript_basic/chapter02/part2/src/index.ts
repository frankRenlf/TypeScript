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
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

class ScorePanel {
    score = 0;
    level = 1;
    scoreEl: HTMLElement;
    levelEl: HTMLElement;
    maxLevel: number;

    constructor(maxLevel: number = 10) {
        this.scoreEl = document.getElementById('score')!;
        this.levelEl = document.getElementById('level')!;
        this.maxLevel = maxLevel;
    }

    scoreAdd() {
        this.score++;
        this.scoreEl.innerHTML = this.score.toString();
        if (this.score % 5 === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEl.innerHTML = this.level.toString();
        }
    }
}

const p = new ScorePanel();
for (let i = 0; i <19; i++) {
    p.scoreAdd();
}