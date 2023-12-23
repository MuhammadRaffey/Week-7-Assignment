// 1- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function elementAdd(numbers: number[], index: number, value: number) {
  // console.log(numbers);
  numbers.splice(index, 0, value);
  console.log(`Your Modified Array is: [${numbers}]`);
}

let rollNo: number[] = [1, 2, 3];
// console.log(rollNo);

elementAdd(rollNo, 2, 67);
export {};
