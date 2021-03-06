// for (let index = 0; index < 3; index++) {
//   let star = Array(index + 1).fill("*");
//   console.log(star.join(""));
// }

// for (let index = 0; index < 3; index++) {
//   let space = Array(3 - (index + 1)).fill(" ");
//   let star = Array(index + 1).fill("*");
//   console.log(space.join("") + star.join(""));
// }

// STRING METHOD, ATTRIBUTE

let str = "      Hello World !!!🎈🎈OOO World     ";
console.log(str);

let strLength = str.length;

console.log("strLength", strLength);

// TEMPLATE STRING
// length
console.log(`Chieu dau chuoi la ${str.length}`);

// Ham split
console.log(str.split("🎈"));

// nth by bracket
console.log(str[str.length - 1]);

// FInd word
console.log(str.indexOf("World"));

// Substring Cat chuoi
const subStr = str.substring(0, 5);
console.log(subStr);
console.log(str);

console.log(str.slice(0, 5));
console.log(str);

let a = "A";
let b = "B";

let strCon = str.concat(". Tra thai", a, b);
console.log("str", str);
console.log("strCon", strCon);

// CHAIN FUNCTIONS
console.log("str.length", str.length);
console.log("str.trim().length", str.trim().length);
let strTRim = str.trim();
console.log("strTRim.length", strTRim.length);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

let test = "hung";
console.log(test.length);

let testStr = "The quick brown fox jumped over the lazy dogs";
// console.log(testStr.replace(/\s+/g,""))
// 1. IN RA SO KI TU CUA MOT CHUOI CHO TRUOC (HELLO -> 5)
console.log(testStr.length);
// 2. IN RA LUONG SO CHU CUA MOT CHUOI CHO TRUOC (HELLO WORLD -> 2)

let arr = "hung   bui".split(" ");

console.log(arr);

let countWord = 0;

for (let index = 0; index < arr.length; index++) {
  let word = arr[index];
  console.log(word);
  if (word.length != 0) {
    countWord++;
  }
}
console.log(countWord);

// 3.
let testStrArr = testStr.split(" ");
console.log(testStrArr);
let max = testStrArr[0];

for (let index = 0; index < testStrArr.length; index++) {
  const word = testStrArr[index];
  console.log(word);
  if (max.length < word.length) {
    max = word;
  }
}

console.log(max);
console.log(max.length);

// 4.
let test4 = "a12bc"; // cba

let test4Arr = test4.split("");
console.log(test4Arr);

for (let index = 0; index < test4Arr.length / 2; index++) {
  let tmp = test4Arr[index];
  test4Arr[index] = test4Arr[test4Arr.length - 1 - index];
  test4Arr[test4Arr.length - 1 - index] = tmp;
}

console.log(test4Arr);
let reverseStr4 = test4Arr.join("");
console.log(reverseStr4);

// SOL 2:
let reverseStrr = "";

for (let index = testStr.length - 1; index >= 0; index--) {
  reverseStrr += testStr[index];
}

console.log(reverseStrr);

// REGULAR EXPRESSION
let splittedWords = "hung  bui".split(/\s+/);
// let splittedWords = "hung  bui".split(" ");
console.log(splittedWords.length);

// 3. TIM RA CHU CO CHIEU DAI LON NHAT TRONG CHUOI (HELLO WORLD -> HELLO, HUNG BUI -> HUNG)

let words = testStr.split(" ");

let longestWord = null;
for (let index = 0; index < words.length; index++) {
  const word = words[index];
  if (longestWord == null) longestWord = word;
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(
  `Chu co chieu dai lon nhat la ${longestWord} co chieu dai la ${longestWord.length}`
);

// 4. DAO CHU, abc -> cba
let reverseStr = "";

for (let index = testStr.length - 1; index >= 0; index--) {
  reverseStr += testStr[index];
}

console.log(reverseStr);

// ARRAY
// METHOD, POP,PUSH,SHIFT,UNSHIFT
// INDEX GET

// EX: sumAll([1, 4]);

// OBJECT
// ACCESS WITH DOT,BRACKET, VARIABLE

// FOR OBJECT

// LOOP ARRAY

// SWITCH, TERMIATE OPERATION
// EX: PRINT EMOJI BASE ON TEXT

// FUNCTION
let number = 6;

let number2;

if (number > 5) {
  number2 = 10;
} else {
  number2 = 1;
}

number2 = number > 5 ? 10 : 1;

console.log(number2);

switch (number) {
  case 5:
    console.log('Bang 5');
    break;
  default:
    console.log('404');
    break;
}


function reverseStrFunc(testStr) {
  let reverseStrr = "";

  for (let index = testStr.length - 1; index >= 0; index--) {
    reverseStrr += testStr[index];
  }
  console.log(reverseStrr);
  return reverseStrr;
}

function isStrongPass(password) {

  return password.length > 8;
}

function checkNumber(number) {
  return number > 10 ? 'Greater than 10' : 'Not Greater than 10';
}

console.log(checkNumber(5))

console.log(isStrongPass('hung12345'))


let afterReverseStr = reverseStrFunc('hung');
console.log(afterReverseStr);

// function addV1(a, b) {
//   return a + b;
// }

// let addV2 = function (a, b) {
//   return a + b;
// }

// let addV3 = (a, b) => a + b; // cach moi

let test123 = addV2(1, 2);
console.log(test123);

// Ex1: 
// 1,2,3,4,5,6,7,8 => 'King'

// 9 ,10 // 'Queen'

// 11,12,13 // 'Knight'

// else 'Citizen'





