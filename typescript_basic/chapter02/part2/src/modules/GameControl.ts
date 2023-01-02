import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import Food from "./Food";
import snake from "./Snake";
import scorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;
    direction: string;
    // game over
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();
        this.direction = '';
        this.food.change();
        this.init();
        document.getElementById('btn')!.addEventListener('click', () => {
            this.direction = '';
            this.snake.restore();
            this.food.change();
            this.scorePanel.restore();
            this.isLive = true;
            document.removeEventListener('keydown', this.keyDownHandler.bind(this));
            this.init();
        })
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
        switch (event.key) {
            case "ArrowUp":
                if (this.direction != "ArrowDown") {
                    this.direction = event.key;
                }
                break;
            case "ArrowDown":
                if (this.direction != "ArrowUp") {
                    this.direction = event.key;
                }
                break;
            case "ArrowLeft":
                if (this.direction != "ArrowRight") {
                    this.direction = event.key;
                }
                break;
            case "ArrowRight":
                if (this.direction != "ArrowLeft") {
                    this.direction = event.key;
                }
                break;
        }
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
        // check is eaten
        this.checkEat(X, Y);

        // modify snake position
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            alert(e.message + ' Game over')
            this.isLive = false;
        }
        this.isLive && setTimeout(this.run.bind(this), 200 - (this.scorePanel.level) * 40);
    }


    // snake eat food
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            console.log('eat');
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addSection();
        }
    }
}

export default GameControl