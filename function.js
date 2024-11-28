// let name;
function nice(name) {
  console.log("hey! " + name + " you are nice");
  console.log("hey! " + name + " you are cool");
  console.log("hey! " + name + " you are brillient!");
  console.log("hey! " + name + " you are so intelligent!");
}
nice("Haroon");

let a = 3,
  b = 5;
function sum(first, second) {
  console.log("Sum is ", first + second);
}
sum(a, b);
function add(one, two, three = 3) {
  return one + two + three;
}
let result1 = add(3, 5);
let result2 = add(4, 5);
let result3 = add(6, 5);
console.log("result 1 is ", result1);
console.log("result 1 is ", result2);
console.log("result 1 is ", result3);
