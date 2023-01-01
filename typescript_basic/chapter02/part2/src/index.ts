import './style/index.less'
import ScorePanel from "./modules/ScorePanel";




const p = new ScorePanel();
for (let i = 0; i < 10; i++) {
    p.scoreAdd();
}