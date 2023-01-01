import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import Food from "./Food";

class GameControl{
    snake:Snake;
    scorePanel:ScorePanel;
    food:Food;

    constructor() {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();
    }
}
export default GameControl