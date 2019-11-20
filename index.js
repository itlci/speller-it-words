const { readFileSync } = require("fs");
const path = require("path");
const fileName = "words.txt";

const getWords = function() {
  return readFileSync(path.resolve(__dirname, fileName), "utf8");
};
const getWordsArray = function() {
  return getWords().split("\n");
};

module.exports = {
  getWords,
  getWordsArray
};
