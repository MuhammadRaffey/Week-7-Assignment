// 7- Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.

function sumofArrayElements(integers: number[]): number {
  let sum: number = 0;
  for (let index = 0; index < integers.length; index++) {
    sum += integers[index];
    // console.log(sum);
  }
  console.log(`The sum of array is ${sum}`);
  return sum;
}
let integers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sumofArrayElements(integers);
