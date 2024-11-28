function nice(name) {
  console.log("hey " + name + " you are nice");
  console.log("hey " + name + " you are good");
  console.log("hey " + name + " your tshirt is nice");
  console.log("hey " + name + " your course is good too");
}
// nice("rohan");
// nice("haroon");
// nice("saim");    
// function sum(a, b) {
//   //   console.log(a + b);
//   return a + b;
// }
function sum(a, b, c=3) {
  return a + b + c;
}

let num1 = 2,
  num2 = 4;
console.log(`The sum of ${num1} and ${num2} is `, sum(num1, num2));
