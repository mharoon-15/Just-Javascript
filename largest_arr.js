let arr = [12, 10, 37, 59, 111, 938, 89, 98];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(`max is ${max}`);
