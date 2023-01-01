import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import Food from "./Food";
import snake from "./Snake";

class GameControl {
    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;
    direction: string;

    constructor() {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();
        this.direction = 'right';
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keyDownHandler);
    }

    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key;
        console.log(this.direction)
        console.log(this)
    }
}

export default GameControl