// const age = prompt("Saisir age: ");

// if (age >= 1 && age <= 6) {
//   alert("Vous etes un jeune enfant");
// } else if (age >= 7 && age <= 11) {
//   alert("Vous etes un jeune enfant qui a atteint l'age de raison");
// } else if (age >= 12 && age <= 17) {
//   alert("Vous êtes un adolescent");
// } else if (age >= 18 && age <= 120) {
//   alert("Vous êtes un adult");
// } else {
//   alert("l'age doit et compris entre 1 a 120");
// }

// let firstNames = [];

// const elements = parseInt(
//   prompt("Entrez le nombre de prénom que vous voulez saisir : ")
// );

// for (let index = 0; index < elements; index++) {
//   const message = `Saisir le prénom ${index + 1}`;
//   const firstName = prompt(message);
//   firstNames.push(firstName);
// }

// if (firstNames.length > 0) {
//   const message = `Les prénoms sont: ${firstNames.join(" ")}`;
//   alert(message);
// }

// let firstNames = [],
//   firstName;

// while (firstName == prompt("Entrez votre nom")) {}

// let s = "WayToLearnX";
// let n = 34223;
// let rev = n.toString().split("").reverse().join("");
// console.log(rev);

/*const number = parseInt(prompt("Entrez un nombre ex : 32243 "));

const reverseNumber = (number = 32243) => {
  const rev = number.toString().split("").reverse().join("");
  return rev;
};

alert(reverseNumber(number));
console.log(reverseNumber());*/

// alert("abcdef01234&&&&".replace(new RegExp("[^(a-z0-9)]", "g"), "X"));

const str = prompt("Entrez un mot ex : webmaster ");

const alphabeticalOrder = (str = "webmaster") => {
  let wordUpperCase = str.toUpperCase();
  let word = wordUpperCase.match(/[A-Z]/g).join("");
  const orderStr = word.split("").sort().join("");

  return orderStr.toLowerCase();
};

alert(alphabeticalOrder(str));
console.log(alphabeticalOrder());

/*const word = prompt("Entrez un mot ex : Bonne annee ");

const getVowelNumber = (word = "Bonne annee") => {
  let vowels = [];
  let wordUpperArr = word.toUpperCase().split("");
  for (let index = 0; index < wordUpperArr.length; index++) {
    const element = wordUpperArr[index];
    if (
      element === "A" ||
      element === "E" ||
      element === "I" ||
      element === "O" ||
      element === "U" ||
      element === "Y"
    ) {
      vowels.push(element);
    }
  }

  return vowels.length;
};

alert(getVowelNumber(word));
console.log(getVowelNumber());*/

/*const word = prompt("Entrez un mot ex : Bonne annee ");

const compterNbVoyelles = (word) => {
  let nbVowels = 0;
  let vowels = ["a", "e", "i", "o", "u", "y"];

  for (let letter of word) {
    if (vowels.includes(letter.toLowerCase())) {
      nbVowels++;
    }
  }
  return nbVowels;
};

console.log(compterNbVoyelles("Bonne annee"));
alert(compterNbVoyelles("Bonne annee"));*/

/*const sentence = prompt("Entrez une phrase ex: le renard brun");

function capitalize(sentence = "le renard brun") {
  return sentence && sentence[0].toUpperCase() + sentence.slice(1);
}

console.log(capitalize());
alert(capitalize(sentence));*/

/*const number1 = parseInt(prompt("Entrez le premier nombre "));
const number2 = parseInt(prompt("Entrez le second nombre "));

const multiplicationDivision = (number1 = 10, number2 = 5) => {
  const multiplication = number1 * number2;
  const divisor = number1 / number2;

  const message = `${number1} * ${number2} = ${multiplication} et ${number1} / ${number2} = ${divisor}`;

  return message;
};

console.log(multiplicationDivision(2, 2));

alert(multiplicationDivision(number1, number2));*/
