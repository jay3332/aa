// Wrapper around built-in canvas because it sucks

export default class Engine {
    _element: HTMLCanvasElement;
    _ctx: CanvasRenderingContext2D;

    constructor({
        canvas,
        width = 600,
        height = 900,
    }: {
        canvas: HTMLCanvasElement,
        width?: number,
        height?: number,
    }) {
        this._element = canvas;
        canvas.width = width;
        canvas.height = height;
        this._ctx = canvas.getContext("2d")!;
    }

    get width(): number {
        return this._element.width;
    }

    get height(): number {
        return this._element.height;
    }

    get size(): [ number, number ] {
        return [ this.width, this.height ];
    }

    get center(): [ number, number ] {
        return [ Math.floor(this.width / 2), Math.floor(this.height / 2) ];
    }

    circle({ x, y, radius, fill }: { x: number, y: number, radius: number, fill?: string }) {
        this._ctx.arc(x, y, radius, 0, 2 * Math.PI);
        if (fill) {
            this._ctx.fillStyle = fill;
            this._ctx.fill();
        }
    }
}