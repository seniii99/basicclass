// level 4
// 1. filter 구현
const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

// myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.
function myFilter(arr, callback) {
  // myFilter 구현
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return;
    }
  }
}

// 2. map 구현
const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

// myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
function myMap(arr, callback) {
  // myMap 구현
  for (let i = 0; i < arr.length; i++) {}
}
