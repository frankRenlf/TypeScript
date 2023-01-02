class ScorePanel {
    score = 0;
    level = 1;
    scoreEl: HTMLElement;
    levelEl: HTMLElement;
    maxLevel: number;
    partition: number;

    constructor(maxLevel: number = 10, partition: number = 5) {
        this.scoreEl = document.getElementById('score')!;
        this.levelEl = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.partition = partition;
    }

    scoreAdd() {
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
}

export default ScorePanel;