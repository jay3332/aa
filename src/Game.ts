import Engine from './Engine';
import { LEVELS, LevelData } from './data';

export interface LevelState {
    level: LevelData;
    remaining: number;
    degrees: number;
    speed: number;
    spokes: number[];
}

export default class Game {
    engine: Engine;
    state?: LevelState;

    constructor(canvas: HTMLCanvasElement) {
        this.engine = new Engine({ canvas });
        this.renderFrame = this.renderFrame.bind(this);

        this.prepareLevel(1);
        this.startTick()
    }

    prepareLevel(level: number) {
        const levelData = LEVELS[++level];
        this.state = {
            level: levelData,
            remaining: levelData.count,
            degrees: 0,
            speed: levelData.initialSpeed,
        }
    }

    startTick(fps: number = 30) {
        const interval = setInterval(() => {
            if (!this.state)
                clearInterval(interval);

            window.requestAnimationFrame(this.renderFrame);
            this.state.degrees += this.state.speed / fps;

            if (this.state.level.run) for (const { degrees, speed } of this.state.level.run) {
                if (this.state.degrees >= degrees) {
                    this.state.speed = speed;
                }
            }
        }, 1000 / fps);
    }

    renderFrame() {
        const [ x, y ] = this.engine.center;
        this.engine.circle({ x, y, fill: 'white', radius: 200 });

        this.engine.text({
            x, y, text: 'test', fill: 'black', font: '200px sans-serif'
        })

        for (const degree of this.state!.level.spokes) {
            
        }
    }
}