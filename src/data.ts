function evenSpokes(count: number): number[] {
    let buffer = 0;
    let spokes = [];
    const degrees = Math.floor(count);

    while (buffer < 360) {
        spokes.push(buffer);
        buffer += degrees;
    }

    return spokes;
}

export interface LevelData {
    spokes: number[];
    count: number;
    initialSpeed: number;
    run?: {
        degrees: number,
        speed: number,
    }[];
}

export const LEVELS: LevelData[] = [
    {
        spokes: [],
        count: 6,
        initialSpeed: 12,
    },
    {
        spokes: evenSpokes(3),
        count: 6,
        initialSpeed: 12,
    },
    {
        spokes: evenSpokes(5),
        count: 6,
        initialSpeed: 12,
    },
];