export default function getOddWords(str) {

let oddWords = [];

const sentence = str.split(" ");

const word = sentence.filter((w) => w.length % 2 !== 0);

sentence.forEach((word) => {
  const letters = word.split("");

  if (letters.length % 2 === 0) return;

  else {
    const returnedWord = letters.join("");
    oddWords.push(returnedWord);
  }
})

  const newString = oddWords.join(" ")
  return newString;
};
