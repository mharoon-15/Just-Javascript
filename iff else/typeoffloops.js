for (let a = 1; a >= 19; a++) {
  console.log(a);
}
// do while
let i = 19;
do {
  console.log(i);
  i++;
} while (i < 6);
// while loop
let b = 0;
while (b < 5) {
  console.log(b);
  b++;
}
// for in loop
let object = {
  name: "haroon",
  role: "programmer",
  company: "codewithharry",
};

for (const key in object) {
  const element = object[key];
  console.log(element);
}
// for of loop
let fruits = ["apple", "banana", "cherrry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// iteretor 'for of loop'
for (const c of "haroon") {
  console.log(c);
}
