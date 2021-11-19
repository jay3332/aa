function evenSpokes(count: number): number[] {
    let buffer = 0;
    let spokes = [];
    const degrees = Math.floor(360 / count);

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
    time?: number;
}

export const LEVELS: LevelData[] = [
    {
        spokes: [],
        count: 6,
        initialSpeed: 48,
    },
    {
        spokes: evenSpokes(3),
        count: 6,
        initialSpeed: 42,
    },
    {
        spokes: evenSpokes(5),
        count: 6,
        initialSpeed: 36,
    },
    {
        spokes: evenSpokes(5),
        count: 8,
        initialSpeed: 42,
    },
    {
        spokes: evenSpokes(8),
        count: 8,
        initialSpeed: 42,
    },
    {
        spokes: evenSpokes(8),
        count: 16,
        initialSpeed: 38,
    },
    {
        spokes: evenSpokes(8),
        count: 16,
        initialSpeed: 48,
        run: [
            { degrees: 90, speed: 28 },
            { degrees: 180, speed: 48 },
            { degrees: 270, speed: 28 },
        ]
    },
    {
        spokes: [0],
        count: 20,
        initialSpeed: 60,
    },
    {
        spokes: evenSpokes(10),
        count: 10,
        initialSpeed: 56,
    },
    {
        spokes: evenSpokes(10),
        count: 14,
        initialSpeed: 64,
        run: [
            { degrees: 0, speed: 64 },
            { degrees: 180, speed: 24 },
        ]
    },
    {
        spokes: evenSpokes(5),
        count: 13,
        initialSpeed: 72,
    },
    {
        spokes: evenSpokes(6),
        count: 22,
        initialSpeed: 48,
        run: [
            { degrees: 0, speed: 48 },
            { degrees: 180, speed: 18 },
            { degrees: 320, speed: 120 },
        ]
    },
    {
        spokes: evenSpokes(2),
        count: 9,
        initialSpeed: 156,
    },
    {
        spokes: evenSpokes(3),
        count: 9,
        initialSpeed: 156,
    },
    {
        spokes: evenSpokes(3),
        count: 4,
        initialSpeed: 270,
    },
    {
        spokes: evenSpokes(15),
        count: 15,
        initialSpeed: 24,
    }
];