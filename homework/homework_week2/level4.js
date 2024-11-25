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
  const filtNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filtNum.push(arr[i]);
    }
  }
  return filtNum;
}

// myFilter 사용
console.log(
  myFilter(objArray, function (item) {
    return item.price >= 200;
  })
); // [ { name: 'banana', price: 200 }, { name: 'grape', price: 300 } ]

// .filter 사용
console.log(
  objArray.filter(function (item) {
    return item.price >= 200;
  })
); // [ { name: 'banana', price: 200 }, { name: 'grape', price: 300 } ]

// 2. map 구현
const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

// myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
function myMap(arr, callback) {
  // myMap 구현
  const mappedNum = [];
  for (let i = 0; i < arr.length; i++) {
    mappedNum.push(callback(arr[i]));
  }
  return mappedNum;
}

// myMap 사용
console.log(
  myMap(objArray, function (item) {
    return item.price;
  })
); // [ 100, 200, 300 ]

// .map 사용
console.log(
  objArray.map(function (item) {
    return item.price;
  })
); // [ 100, 200, 300 ]
