// A = Rock = 1
// B = Paper = 2
// C = Scissors = 3

// X = lose
// Y = draw
// Z = win

// Lost = 0;
// Draw = 3;
// Won = 6;

const endStateScore = {
    lost: 0,
    draw: 3,
    won: 6,
};

const condition = {
    X: "lose",
    Y: "draw",
    Z: "win",
};

const shapeValue = {
    A: 1,
    B: 2,
    C: 3,
};

const loseCombinations = {
    A: "C",
    B: "A",
    C: "B",
};

const winCombinations = {
    A: "B",
    B: "C",
    C: "A",
};

const { readFileSync } = require("fs");

function countAllGamesScore() {
    const contents = readFileSync("input.txt", "utf-8");

    const rounds = contents.split("\n").map((e) => e.split(" "));

    let score = 0;

    for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i];

        const opponentMove = round[0];
        const yourMove = round[1];

        const opponentShapeScore = shapeValue[opponentMove];
        const planCondition = condition[yourMove];

        if (planCondition === condition.X) {
            score += endStateScore.lost;
            score += shapeValue[loseCombinations[opponentMove]];
        }

        if (planCondition === condition.Y) {
            score += endStateScore.draw;
            score += opponentShapeScore;
        }

        if (planCondition === condition.Z) {
            score += endStateScore.won;
            score += shapeValue[winCombinations[opponentMove]];
        }
    }
    return score;
}

console.log(countAllGamesScore());