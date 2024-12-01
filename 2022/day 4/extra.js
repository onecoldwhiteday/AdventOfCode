const { readFileSync } = require("fs");

function countTotalPairOverlaps() {
    const contents = readFileSync("input.txt", "utf-8").split("\n");

    let overlapCounter = 0;

    for (let i = 0; i < contents.length; i++) {
        const pair = contents[i].split(",").map((el) => el.split("-"));
        const aRange = pair[0];
        const bRange = pair[1];

        const range = aRange.concat(bRange).map((n) => parseInt(n));

        const [startA, endA, startB, endB] = range;

        if (
            (startA >= startB && startA <= endB) ||
            (endA >= startB && endA <= endB) ||
            (startB >= startA && startB <= endA) ||
            (endB >= startA && endB <= endA)
        ) {
            overlapCounter++;
        }
    }
    return overlapCounter;
}

console.log(countTotalPairOverlaps());