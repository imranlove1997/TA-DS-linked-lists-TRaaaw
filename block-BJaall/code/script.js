function insertionSort(arr) {  
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length + 1; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      let newVar = arr[i];
      arr[i] = arr[min];
      arr[min] = newVar;
    }
  
    return arr;
  }
  
  let values = [76, 34, 12, 32, 4, 2, 123, 5667, 8, 1, 3];
  console.log(insertionSort(values));