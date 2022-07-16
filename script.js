//Function Times 3- Create a function that takes three collections of arguments and returns the sum of the product of numbers

var calc = function (a, b) {
  return function (c, d) {
    return function (e, f) {
      return a * c * e + b * d * f;
    };
  };
};

console.log(calc(1, 2)(1, 1)(2, 3));

//Fix the Code: Un-Mutating an Array

function change(x, times) {
  let newArr = [...x];
  for (let i = 0; i < x.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < x.length - j) {
        newArr[i]--;
      }
      j++;
    }
  }
  return newArr;
}

let x = [3, 3, 3, 3, 3, 3, 3];
console.log(change(x, 2));
console.log(change(x, 5));
console.log("The original array: [" + x + "]");
console.log("The change() function didn't mutate the original array.");

//Metaprogramming: Making a Test Case

function createTest(a, b) {
  if (typeof a === "number" && typeof b === "number")
    return assertEquals(
      `createTest(${a}, ${b})`,
      a,
      b,
      a + b,
      "\n//Parameters are numbers, so the result is their sum: Test function verifies equality."
    );
  if (typeof a === "string" && typeof b === "string")
    return assertEquals(
      `createTest("${a}", "${b}")`,
      a,
      b,
      a + b,
      "\n//Parameters are strings, so the result is their join: Test function verifies equality."
    );
  else if (Array.isArray(a) && Array.isArray(b))
    return assertSimilar(
      `createTest(`,
      a,
      b,
      a.concat(b),
      "\n//Parameters are objects, so the result is their concatenation: Test function verifies similarity."
    );
}

function assertEquals(func, a, b, result, comment) {
  if (a + b === result && typeof result === "number")
    return `Test.assertEquals(${func}, ${result})  ${comment}`;
  else if (a + b === result && typeof result === "string")
    return `Test.assertEquals(${func}, "${result}")  ${comment}`;
  else return "Test failed!";
}
function assertSimilar(func, a, b, result, comment) {
  let strResult = "[";
  if (Array.isArray(a) && Array.isArray(b) && Array.isArray(result)) {
    result.forEach((element) => {
      typeof element === "string"
        ? (strResult += `"${element}",`)
        : (strResult += `${element},`);
    });
    strResult = strResult.slice(0, strResult.length - 1) + "]";
    func += "[";
    a.forEach((element) => {
      typeof element === "string"
        ? (func += `"${element}",`)
        : (func += `${element},`);
    });
    func = func.slice(0, func.length - 1) + "],[";
    b.forEach((element) => {
      typeof element === "string"
        ? (func += `"${element}",`)
        : (func += `${element},`);
    });
    func = func.slice(0, func.length - 1) + "])";
    return `Test.assertSimilar(${func}, ${strResult})  ${comment}`;
  } else return "Test failed!";
}
var Test = createTest(10, 5);
console.log(Test);

var Test = createTest("or", "tal");
console.log(Test);

var Test = createTest(["a", "b"], ["c", "d"]);
console.log(Test);

var Test = createTest([10, 20], [30, 40]);
console.log(Test);

var Test = createTest([10, 20], ["a", "b"]);
console.log(Test);

//Backspace Attack -Suppose a hash # represents the BACKSPACE key being pressed.
// Write a function that transforms a string containing # into a string without any #.
function erase(str) {
  let newStr = "";
  for (var i = 0; i < str.length; i++)
    if (str[i] !== "#") {
      newStr += str[i];
    } else newStr = newStr.slice(0, -1);
  return newStr;
}
console.log(erase("he##l#hel#llo"));
console.log(erase("major# spar##ks"));
console.log(erase("si###t boy"));
console.log(erase("###"));

//Moving Partition -Create a function to partition an array from left to right.
function movingPartition(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
    var insideArr = [];
    insideArr.push([arr.slice(0, i + 1)]);
    insideArr.push([arr.slice(i + 1, arr.length)]);
    newArr.push(insideArr);
  }
  return newArr;
}

console.log(...movingPartition([-1, -1, -1, -1]));
console.log(...movingPartition([1, 2, 3, 4, 5]));
console.log(...movingPartition([]));

//Function Factory -Create a function that takes a "base number" as an argument.
//This function should return another function which takes a new argument,
//and returns the sum of the "base number" and the new argument.

function makePlusFunction(baseNumber) {
  return function (number) {
    return number + baseNumber;
  };
}

const plusFive = makePlusFunction(5);
console.log(plusFive(2));

const plusTen = makePlusFunction(10);
console.log(plusTen(100));
