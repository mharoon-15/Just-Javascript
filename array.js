let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(arr.length);

arr[0] = 4;

console.log("length of array is :", arr[4]);
let a;
// !for (a = 0; a < 6; a++) {
//  ! console.log(arr[a]);
// !}
console.log("poped element is : ", arr.pop());
console.log("pushed element is :", arr.push(19));
console.log("pushed element is :", arr.push("haroon"));
console.log(arr.shift(2));
console.log(arr.unshift(4));
// to convert arr to string
console.log(arr.toString);
// to join anything
console.log(arr.join(" and "));
// !functions in javascript
// ? tostring concaat shift unshift sort join push splice(2,5)
