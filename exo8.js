const cloneArray = (arr = [1, 2, 4, 0]) => {
  let arrClone = arr;
  return arrClone;
};

console.log(cloneArray([1, 2, [4, 0]]));
