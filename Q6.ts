// Write a program having an integers of numbers if the number is negative it should remove the negative number from the integers.

let integers: number[] = [
  -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

let positiveIntegers = integers.filter((num) => num >= 0);

console.log(`Your array with all positive values is [ ${positiveIntegers} ]`);
export {};
