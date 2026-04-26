/*

Given a compressed string, return the decompressed version using the following rules:

The given string is made up of words and numbers separated by spaces.
Leave the words unchanged.
Replace numbers with the word at that position, where the first word is at position 1.

*/

function decompress(str) {

const inputList = [];
const sentence = [];
const string = str.split(" ")

string.forEach((input) => {

    inputList.push(input);

    const number = Number(input);

    if (Number.isNaN(number)) {
    sentence.push(input);
    }

    else {
    sentence.push(inputList[number - 1])
    }
  
})

const result = sentence.join(" ");

console.log(result)

return result;
  
}


decompress("lorem ipsum dolor sit per elit donec 4 nostra libero 5 7 ligula 4 gravida at 6 vitae a 6 sodales 7 en 7 16 3 nam 13 dignissim risus 16 13 5 27 2 2 15 23 6 5 2 13 23 15 5 21 4 16 27 1 4 5 10 23 2 6 4 21 4 30 6 30 2 6 16 15 18 23 29 27 4 18 sollicitudin 5 9 5 4 10")