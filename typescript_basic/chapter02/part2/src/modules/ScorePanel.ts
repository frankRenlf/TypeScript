class ScorePanel {
    score = 0;
    level = 0;
    scoreEl: HTMLElement;
    levelEl: HTMLElement;
    maxLevel: number;
    partition: number;

    constructor(maxLevel: number = 5, partition: number = 5) {
        this.scoreEl = document.getElementById('score')!;
        this.levelEl = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.partition = partition;
    }

    addScore() {
        this.score++;
        this.scoreEl.innerHTML = this.score.toString();
        if (this.score % this.partition === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEl.innerHTML = this.level.toString();
        }
    }

    restore() {
        this.score = 0;
        this.level = 1;
        this.scoreEl.innerHTML = this.score.toString();
        this.levelEl.innerHTML = this.level.toString();
    }
}

export default ScorePanel;