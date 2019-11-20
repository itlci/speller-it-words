const { readFileSync } = require("fs");
const fileName = "words.txt";

const getWords = function() {
  return readFileSync(fileName, "utf8");
};
const getWordsArray = function() {
  return getWords().split("\n");
};

module.exports = {
  getWords,
  getWordsArray
};
