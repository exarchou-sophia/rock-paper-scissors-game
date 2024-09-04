const { getRandNumber } = require("./helper");

// game logic
const handShape = {
  rock: 0,
  paper: 1,
  scissors: 2,
  none: 3,
};

const getRandHandShape = () => getRandNumber(3);

const isDraw = (handOne, handTwo) => handOne === handTwo;

const isHandOneWinner = (handOne, handTwo) =>
  (handOne === handShape.rock && handTwo === handShape.scissors) ||
  (handOne === handShape.scissors && handTwo === handShape.paper) ||
  (handOne === handShape.paper && handTwo === handShape.rock);

const getHandShapeNameFromNumber = (number) => {
  switch (number) {
    case 0:
      return "🪨 Rock";
    case 1:
      return "📜 Paper";
    case 2:
      return "💇 Scissors";
    default:
      return "🤬 None";
  }
};

if (process.argv.length !== 3) {
  console.error("Error! You typed more than one choice or no choice!");
  console.info(
    "Please type only ONE of the following: 0, 1, 2! (0 = rock, 1 = paper, 2 = scissors)"
  );

  return;
}

// https://nodejs.org/api/process.html#processargv
// process.argv is always a string so userHand input will also always be a string.
// but AI hand is always number .... bug:
// then isDraw does not work because  "2" === 2 is always false!!!
// solution: converted the process.argv into anumber using parseInt
const userHand = parseInt(process.argv[2]);

if (userHand > 2) {
  console.error("Error! You typed a number higher than 2!");
  console.info(
    "Please type a 0 or 1 or 2! (0 = rock, 1 = paper, 2 = scissors)"
  );
  console.info("Numbers higher than 2 are not valid.");
  return;
}

const aiHand = getRandHandShape();

console.info(`🤖 AI played ${getHandShapeNameFromNumber(aiHand)}.`);
console.info(`😉 You played ${getHandShapeNameFromNumber(userHand)}.`);

if (isDraw(aiHand, userHand)) {
  console.info("\x1b[35m", "It's a draw!");
  console.info("\x1b[35m", "You both win!");
} else if (isHandOneWinner(aiHand, userHand))
  console.info("\x1b[31m", "🤬 AI Wins!");
else console.info("\x1b[32m", "🥳 🎉 You Win!");
