// A = Rock = 1
// B = Paper = 2
// C = Scissors = 3

// X = Rock = 1
// Y = Paper = 2
// Z = Scissors = 3

// 1 2 = 1
// 2 3 = 1
// 3 1 = -2

// 2 1 = -1
// 3 2 = -1
// 1 3 = 2

// Lost = 0;
// Draw = 3;
// Won = 6;

const endStateScore = {
    lost: 0,
    draw: 3,
    won: 6,
};

const you = {
    X: 1,
    Y: 2,
    Z: 3,
};

const opponent = {
    A: 1,
    B: 2,
    C: 3,
};

const { readFileSync } = require("fs");

function countAllGamesScore() {
    const contents = readFileSync("input.txt", "utf-8");

    const rounds = contents.split("\n").map((e) => e.split(" "));

    let score = 0;

    for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i];
        const opponentShapeScore = opponent[round[0]];
        const yourShapeScore = you[round[1]];

        score += yourShapeScore;

        const diff = yourShapeScore - opponentShapeScore;
        // Draw condition
        if (diff === 0) {
            score += endStateScore.draw;
            // Win condition
        } else if (diff === 1 || diff === -2) {
            score += endStateScore.won;
        }
    }
    return score;
}

console.log(countAllGamesScore());