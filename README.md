# speller-it-words

IT Words Dictionary for [eslint-plugin-speller](https://github.com/itlci/eslint-plugin-speller)

## Motivation

Recently, I started working on an ESLint plugin called [eslint-plugin-speller](https://github.com/itlci/eslint-plugin-speller). It uses the [nspell](https://github.com/wooorm/nspell) package, which supports spell checking. It is possible to attach national dictionaries, but so far I have not found one set of words used in IT projects (e.g. technology names, specific words for given technologies, company and product names) - some of these words are proper names, abbreviations, so they should not be treated as incorrect. So I decided to create a set of words about the IT industry. I hope it will be helpful.

## Installation

```
$ npm install speller-it-words --save-dev
```

## How to use it

```js
const words = require("speller-it-terms").getWords();
```

or

```js
const words = require("speller-it-terms").getWordsArray();
```

## What's next?

500 words to start. Over time, the number of words will increase. I also wanted to divide the words more contextually, depending on the technology.
