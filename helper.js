const getRandNumber = (max) => Math.floor(Math.random() * max);
const getRandBool = () => getRandNumber(2);

module.exports = {
  getRandNumber,
  getRandBool,
};
