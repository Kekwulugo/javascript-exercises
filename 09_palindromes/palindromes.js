const palindromes = function (string) {
let stringOne = string.toLowerCase().replace(/[^a-z0-9]/g, ''); 
let stringTwo = stringOne.split("").reverse("").join("");
console.log(stringOne);
console.log(stringTwo)
return stringOne == stringTwo;

};

console.log(palindromes('ZZZZ car, a man, a maracaz.'))

// Do not edit below this line
module.exports = palindromes;
