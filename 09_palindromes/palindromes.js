const palindromes = function (str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanString = str.toLowerCase().split('').filter((char) => alphabet.includes(char)).join('');

    const reverseStr = cleanString.split('').reverse().join('');

    return cleanString === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
