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
        this.direction = 'ArrowRight';
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this));
        // this.scorePanel.level = 10;
        this.run();
    }

    /*
        ArrowUp
        ArrowDown
        ArrowLeft
        ArrowRight
     */
    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    // control the move of snake
    run() {
        /*
            based on direction
         */
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }
        this.snake.X = X;
        this.snake.Y = Y;
        setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
}

export default GameControl