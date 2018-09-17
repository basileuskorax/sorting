const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  
  function bubbleSort(arr) {
    let sorted = false;
  
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] && arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
          console.log(`swap!`);
          sorted = false;
        }
      }
    }
  
    return arr;
  }