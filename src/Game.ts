import Engine from './Engine';

export default class Game {
    engine: Engine;
    
    constructor(canvas: HTMLCanvasElement) {
        this.engine = new Engine({ canvas });
        this.prepareLevel();
    }

    prepareLevel() {
        const [ x, y ] = this.engine.center;
        this.engine.circle({ x, y, fill: 'white', radius: 200 });
    }
}