const { readFileSync } = require("fs");

/**
 * @param {listA} number[]
 * @param {listB} number[]
 */
function countDistance(listA, listB) {
    return listA.reduce((acc, val, i) => {
        if (isNaN(val) || (isNaN(listB[i]))) {
            return acc;
        }
        acc += (val > listB[i] ? (val - listB[i]) : (listB[i] - val));
        return acc;
    }, 0);
}

/**
 * @param {listA} number[]
 * @param {listB} number[]
 */
function countSimilarityScore(listA, listB) {
    const mapA = new Map();

    listA.filter(Boolean).map((num) => mapA.set(num, 0));

    for (let num of listB) {
        if (mapA.has(num)) {
            let counter = mapA.get(num);
            mapA.set(num, ++counter);
        }
    }

    let score = 0;
    for (let [num, counter] of mapA) {
        score += num * counter;
    }
    return score;
}


// Parse input file
const contents = readFileSync("input.txt", "utf-8");
const inputLinesArr = contents.split("\n");

const a = [];
const b = [];
// Might be done better?
for (let line of inputLinesArr) {
    const lineVals = line.split(' '.repeat(3));
    a.push(parseInt(lineVals[0]));
    b.push(parseInt(lineVals[1]));
}
a.sort(); // Under the hood it's qsort from C++ std, so why not
b.sort();

console.log(countDistance(a, b));
console.log(countSimilarityScore(a, b));