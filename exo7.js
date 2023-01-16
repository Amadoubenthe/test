// const signProductThreeNumbers = (n1 = 3, n2 = -7, n3 = 2) => {
//   const result = n1 * n2 * n3;
//   if (result >= 0) {
//     return "+";
//   } else {
//     return "-";
//   }
// };

// console.log(signProductThreeNumbers());

// let number1 = Number.isInteger(parseInt(prompt("Entrer le nombre 1")));
// if (!Number.isInteger(number1)) {
//     alert("Entrez un nombre")
// }

let number1, number2, number3;

while (!Number.isInteger(number1)) {
  number1 = parseInt(prompt("Entrez le nombre1"));
}

while (!Number.isInteger(number2)) {
  number2 = parseInt(prompt("Entrez le nombre2"));
}

while (!Number.isInteger(number3)) {
  number3 = parseInt(prompt("Entrez le nombre3"));
}

function getSignOfProduct(n1 = 3, n2 = 0, n3 = 2) {
  const result = n1 * n2 * n3;
  if (result > 0) {
    return "+";
  } else if (result === 0) {
    return null;
  } else {
    return "-";
  }
}

alert(getSignOfProduct(number1, number2, number3));

// console.log(getSignOfProduct(number1, number2, number3));
