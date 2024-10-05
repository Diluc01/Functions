// first function
let arrayOfNumbers = [1, 2, 3, 4, 5];
let arrayOfStrings = ["Berlin", "Daniel", "Ray", "Robert", "Mashiur"];
function summingArrays(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

let result1 = summingArrays(arrayOfNumbers);

console.log(result1);

// Second function

function average(arr) {
  let sum = 0;
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    sum += arr[i];
  }
  return sum / count;
}

let result2 = average(arrayOfNumbers);

console.log(result2);

//third problem

function longestArray(arr) {
  let newString = "";
  let lgth = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
      lgth = arr[i].length;
      newString = arr[i];
    }
  }
  return newString;
}

let result3 = longestArray(arrayOfStrings);

console.log(result3);

//fourth problem

function stringsLongerThan(arr, num) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

let result4 = stringsLongerThan(arrayOfStrings, 3);

console.log(result4);

// fifth problem

function recursiveFunction(n) {
  let result = "";
  if (n <= 1) {
    result = "1";
  } else {
    result = recursiveFunction(n - 1) + n;
  }
  return result;
}

let result5 = recursiveFunction(5);

console.log(result5);
