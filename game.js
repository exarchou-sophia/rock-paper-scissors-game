const { getRandNumber } = require("./helper");

// game logic
const getRandHandShape = () => getRandNumber(3);

const isDraw = (choice1, choice2) => choice1 === choice2;

const isChoiceAWinner = (choice1, choice2) =>
  (choice1 === handShape.rock && choice2 === handShape.scissors) ||
  (choice1 === handShape.scissors && choice2 === handShape.paper) ||
  (choice1 === handShape.paper && choice2 === handShape.rock);

const handShape = {
  rock: 0,
  paper: 1,
  scissors: 2,
};

// TODO use params
const userChoice = handShape.rock;
const computerChoice = getRandHandShape();

console.log(computerChoice, userChoice);

// some execution tests

if (isDraw(computerChoice, userChoice))
  console.log("It's a draw! You both win!");
else if (isChoiceAWinner(computerChoice, userChoice))
  console.log("ChoiceA Wins!");
else console.log("ChoiceB Wins!");
