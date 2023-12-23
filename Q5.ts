// Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.

function factorial(posInt: number): number {
  if (posInt < 0) {
    console.log("Kindly Enter a Positive Int");
    return -1;
  } else {
    let fac = 1;
    for (let i = 2; i <= posInt; i++) {
      fac *= i;
    }
    console.log(`The Factorial of ${posInt} is : ${fac}`);
    return fac;
  }
}

factorial(5);
