// 8- Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.

function tempConvert(tempinC: number[]): number[] {
  let tempinF: number[] = [];
  for (let index = 0; index < tempinC.length; index++) {
    let faren: number = tempinC[index] * (9 / 5) + 32;
    tempinF.push(faren);
  }
  console.log(`The Temp converted in F is : [ ${tempinF} ]`);
  return tempinF;
}
let temperaturesCelsius: number[] = [20, 25, 18, 30, 22, 17, 23];
tempConvert(temperaturesCelsius);
