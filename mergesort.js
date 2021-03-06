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

function mergeSort(array) {
  let left = split(array)[0];
  let right = split(array)[1];

  if (left.length + right.length < 2) {
    return array;
  }

  return merge([mergeSort(left), mergeSort(right)]);
}

// console.log(mergeSort([2, 3, 312, 21, 21, 8]));
// console.log(mergeSort([2, 1]));
