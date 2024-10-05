//Part 1
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

//Part 2
// First problem
let arrayOfObjects = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

arrayOfObjects.sort((a, b) => {
  return a.age - b.age;
});

console.log(arrayOfObjects);

// second problem
const filteredArray = arrayOfObjects.filter((user) => {
  if (Number(user.age) < 50) {
    return user;
  }
});

console.log(filteredArray);

// third problem
const mappedArray = arrayOfObjects.map((currentUser) => {
  delete Object.assign(currentUser, {
    ["job"]: currentUser["occupation"],
  })["occupation"];
  currentUser.age = Number(currentUser.age) + 1;
  currentUser.age = String(currentUser.age);
  return currentUser;
});

console.log(mappedArray);

//fourth problem
