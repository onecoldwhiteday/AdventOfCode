const { readFileSync } = require("fs");

let firstPlace = 0;
let secondPlace = 0;
let thirdPlace = 0;

function countMaxCalories(greaterPlace) {
    const contents = readFileSync("input.txt", "utf-8");
    const arr = contents.split("\n\n");

    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        const sum = arr[i]
            .split("\n")
            .map((n) => parseInt(n))
            .reduce((s, a) => s + a, 0);

        if (greaterPlace) {
            if (sum > max && sum < greaterPlace) {
                max = sum;
            }
        } else if (sum > max) {
            max = sum;
        }
    }

    if (!firstPlace) {
        firstPlace = max;
        countMaxCalories(firstPlace);
    }

    if (firstPlace && !secondPlace) {
        secondPlace = max;
        countMaxCalories(secondPlace);
    }

    if (firstPlace && secondPlace && !thirdPlace) {
        thirdPlace = max;
    }

    return [
        firstPlace,
        secondPlace,
        thirdPlace,
        firstPlace + secondPlace + thirdPlace,
    ];
}

console.log(countMaxCalories());