// function nice(name) {
//   console.log("hey " + name + " you are nice");
//   console.log("hey " + name + " you are good");
//   console.log("hey " + name + " you are cool");
// }
// nice("ali");
// nice("shivam");
function sum(a, b) {
  return a + b;
}
console.log(`the sum is ${sum(4, 8)}`);
let result = sum(5, 8);
console.log("the sum is ", result);
function su(a, b, c = 1) {
  return a + b + c;
}
let result2 = su(3, 5, 5);
console.log("resuslt2 is : ", result2);
const func1 = (x) => {
  console.log("I am an arrow function ", x);
};
func1(54);
