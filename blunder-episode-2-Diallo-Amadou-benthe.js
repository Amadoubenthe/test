/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());

let rooms = {};
let maxMoneyRooms = {};

for (let i = 0; i < N; i++) {
  const room = readline();

  // Utilisation de la méthode split() qui divise une chaîne de caractères en une liste ordonnée de sous-chaînes
  const [number, money, r1, r2] = room.split(" ");

  rooms[number] = {
    money,
    r1,
    r2,
  };
}

const convertToNumber = (number) => {
  // Utilisation de la fonction parseInt
  return parseInt(number);
};

const getTotal = (door, money) => {
  if (door === "E") {
    return convertToNumber(money);
  } else {
    return convertToNumber(money) + convertToNumber(getMaxMoney(door));
  }
};

const getMaxMoney = (num) => {
  let firstTotal = 0;
  let secondTotal = 0;

  const number = convertToNumber(num);

  if (number in maxMoneyRooms) {
    return maxMoneyRooms[number];
  }

  firstTotal = getTotal(rooms[number].r1, rooms[number].money);

  secondTotal = getTotal(rooms[number].r2, rooms[number].money);

  // Utilisation de la fonction Math.max() qui renvoie le plus grand nombre d'une série de 0 ou plusieurs nombres
  maxMoneyRooms[number] = Math.max(firstTotal, secondTotal);

  return maxMoneyRooms[number];
};

const maxMoney = getMaxMoney("0");

console.log(maxMoney);
