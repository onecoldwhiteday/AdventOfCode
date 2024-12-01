const { readFileSync } = require("fs");

function countPrioritySum() {
    const input = readFileSync("input.txt", "utf-8");

    const packs = input.split("\n");
    let sum = 0;

    const alphabetUppercaseCodes = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabetUppercase = alphabetUppercaseCodes.map((x) =>
        String.fromCharCode(x)
    );

    const alphabetLowercaseCodes = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabetLowercase = alphabetLowercaseCodes.map((x) =>
        String.fromCharCode(x)
    );

    const priorityList = alphabetLowercase.concat(alphabetUppercase);

    for (let i = 0; i < packs.length; i++) {
        const half = Math.ceil(packs[i].length / 2);

        const firstCompartment = packs[i].slice(0, half);
        const secondCompartment = packs[i].slice(half);

        for (let j = 0; j < firstCompartment.length; j++) {
            if (secondCompartment.includes(firstCompartment[j])) {
                sum += priorityList.indexOf(firstCompartment[j]) + 1;
                break;
            }
        }
    }
    return sum;
}

console.log(countPrioritySum());