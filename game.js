const { getRandNumber } = require("./helper");

// game logic
const getRandHandShape = () => getRandNumber(3);

const isDraw = (choice1, choice2) => choice1 === choice2;

const isComputerAWinner = (choice1, choice2) =>
  (choice1 === handShape.rock && choice2 === handShape.scissors) ||
  (choice1 === handShape.scissors && choice2 === handShape.paper) ||
  (choice1 === handShape.paper && choice2 === handShape.rock);

const handShape = {
  rock: 0,
  paper: 1,
  scissors: 2,
};

if (process.argv.length !== 3) {
  console.error("Error! You typed more than one choice or no choice!");
  console.info(
    "Please type only ONE of the following: 0, 1, 2! (0 = rock, 1 = paper, 2 = scissors)"
  );

  return;
}

// https://nodejs.org/api/process.html#processargv
// process.argv is always a string so userChoice input will also always be a string.
// but computerChoice is always number .... bug:
// then isDraw does not work because  "2" === 2 is always false!!!
// solution: converted the process.argv into anumber using parseInt
const userChoice = parseInt(process.argv[2]);

if (userChoice > 2) {
  console.error("Error! You typed a number higher than 2!");
  console.info(
    "Please type a 0 or 1 or 2! (0 = rock, 1 = paper, 2 = scissors). Numbers higher than 2 are not valid."
  );
  return;
}

const computerChoice = getRandHandShape();

console.log(`Computer played ${computerChoice}, you played ${userChoice}`);

if (isDraw(computerChoice, userChoice))
  console.log("It's a draw! You both win!");
else if (isComputerAWinner(computerChoice, userChoice))
  console.log("Computer Wins!");
else console.log("You Win!");
