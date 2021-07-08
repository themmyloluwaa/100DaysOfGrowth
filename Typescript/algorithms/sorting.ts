const bubbleSort = (arr: any[]): any[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([1, 2, 0, 11, 3]));

const insertionSort = (arr: any[]): any[] => {
  const insert = (start: number, value: any): void => {
    let temp = start;

    for (temp; temp >= 0 && arr[temp] > value; temp--) {
      arr[temp + 1] = arr[temp];
    }

    arr[temp + 1] = value;
  };

  for (let i = 0; i < arr.length; i++) {
    insert(i - 1, arr[i]);
  }

  return arr;
};

console.log(insertionSort([1, 2, 0, 11, 3]));

const mergeSort = (arr: any[]): any[] => {
  const merge = (left: any[], right: any[]): any[] => {
    const output = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        output.push(left.shift());
      } else {
        output.push(right.shift());
      }
    }

    return [...output, ...left, ...right];
  };

  if (arr.length < 2) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half, arr.length);
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([1, 2, 0, 11, 3]));

const selectionSort = (arr: any[]): any[] => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let min_index = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
  return arr;
};

console.log(selectionSort([1, 2, 0, 11, 3]));
