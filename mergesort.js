function split(wholeArray) {
  let midpoint = Math.ceil(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
}

function merge(array) {
  let firstArr = array[0];
  let secondArr = array[1];

  let merged = [];

  while (firstArr.length > 0 && secondArr.length > 0) {
    if (firstArr[0] < secondArr[0]) merged.push(firstArr.shift());
    else if (firstArr[0] >= secondArr[0]) merged.push(secondArr.shift());
    if (firstArr.length === 0) return (merged = [...merged, ...secondArr]); //merged.concat(secondArr);
    if (secondArr.length === 0) return (merged = [...merged, ...firstArr]); //merged.concat(firstArr);
  }

  return merged;
}

function mergeSort(array) {}

console.log(merge([[2, 8], [3, 4, 7]]));
console.log(merge([[1, 100], [2, 200]]));
