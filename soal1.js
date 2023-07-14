//A
const chalk = require("chalk");
const validator = require("validator");

const getPalindrome = (word) => {
    if (typeof word !== "string" || !validator.isAlpha(word)) {
        console.log(chalk.red("Please enter the correct word!"));
    } else {
        let reversedWord = word.split("").reverse().join("");
        if (word.toLowerCase() === reversedWord.toLowerCase()) {
            console.log(`${chalk.green(word)} is a ${chalk.green("Palindrome")}`);
        } else {
            console.log(`${chalk.green(word)} is ${chalk.red("not")} a ${chalk.red("Palindrome")}`);
        }
    }
};

getPalindrome("malam");
console.log("");

//B
const reversedSentence = (sentence) => {
    if (typeof sentence !== "string") {
        return `${chalk.red("Please enter the correct sentence!")}`;
    }

    const words = sentence.split(" ");
    if (words.length <= 1) {
        return `${chalk.red("Please enter a sentence with more than one word")}`;
    } else {
        const reversedWords = words.reverse().join(" ");

        return reversedWords;
    }
};

const input = "saya suka dia";
const output = reversedSentence(input);
console.log(output);
