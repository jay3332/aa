import Engine from './Engine';
import { LEVELS, LevelData } from './data';

export interface LevelState {
    level: LevelData;
    levelNumber: number;
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
        this.drawSpoke = this.drawSpoke.bind(this);

        this.prepareLevel(16);
        this.startTick()
    }

    prepareLevel(level: number) {
        const levelData = LEVELS[level - 1];
        this.state = {
            level: levelData,
            levelNumber: level,
            remaining: levelData.count,
            degrees: 0,
            spokes: [],
            speed: levelData.initialSpeed,
        }
    }

    startTick(fps: number = 60) {
        const interval = setInterval(() => {
            if (!this.state)
                clearInterval(interval);

            window.requestAnimationFrame(this.renderFrame);
            this.state!.degrees += this.state!.speed / fps;

            if (this.state!.level.run) for (const { degrees, speed } of this.state!.level.run) {
                if (this.state!.degrees % 360 >= degrees) {
                    this.state!.speed = speed;
                }
            }

            this.engine!.ctx.clearRect(0, 0, ...this.engine.size);
        }, 1000 / fps);
    }

    renderFrame() {
        this.state!.level.spokes.forEach(this.drawSpoke);

        const [ x, y ] = this.engine.center;
        this.engine.circle({ x, y, fill: 'white', radius: 145 });
        this.engine.text({ x, y, text: this.state!.levelNumber, fill: 'black', size: 130 });
    }

    drawSpoke(degree: number) {
        const { ctx } = this.engine;

        ctx.save();
        ctx.translate(...this.engine.center);
        ctx.rotate((this.state!.degrees + degree) * Math.PI / 180);
        this.engine.line({
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 300,
            width: 6,
            fill: 'white',
        });
        this.engine.circle({ x: 0, y: 300, radius: 25, fill: 'white' });
        ctx.restore();
    }
}