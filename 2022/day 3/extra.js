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

    const groups = [];
    for (let i = 0; i < packs.length; i += 3) {
        groups.push(packs.slice(i, i + 3));
    }

    for (let j = 0; j < groups.length; j++) {
        const firstPack = groups[j][0];
        const secondPack = groups[j][1];
        const thirdPack = groups[j][2];

        for (let k = 0; k < firstPack.length; k++) {
            const letter = firstPack[k];
            if (secondPack.includes(letter) && thirdPack.includes(letter)) {
                sum += priorityList.indexOf(letter) + 1;
                break;
            }
        }
    }
    return sum;
}

console.log(countPrioritySum());