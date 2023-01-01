import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import Food from "./Food";
import snake from "./Snake";

class GameControl {
    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;

    constructor() {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keyDownHandler);
    }

    keyDownHandler(event: KeyboardEvent) {
        console.log(this.snake.X, this.snake.Y);
    }
}

export default GameControl