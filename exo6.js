const arr1 = ["Rouge", "Vert", "Blanc", "Noir"];

const joinElemetOfArray = (arr = arr1, signe = "+") => {
  return arr.join(signe);
};

console.log(joinElemetOfArray(arr1, (signe = ",")));
console.log(joinElemetOfArray());
