const greeting = "Hello everyone here is an alogrithm i will push to GitHub";
console.log(greeting);

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 *     A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

function fewestCoinChange(cents) {
  const coins = { quarter: 0, dime: 0, nickel: 0, penny: 0 }; // Initialize the Coins Object
  const denominations = { quarter: 25, dime: 10, nickel: 5, penny: 1 }; // Initialize the Denominations Object

  for (let coin in denominations) {
    // Iterate over each coin type in the denominations object
    while (cents >= denominations[coin]) {
      // Check if the remaining cents is greater than or equal to the coin’s value
      coins[coin]++; // Increment the count for that coin in the coins object
      cents -= denominations[coin]; // Subtract the coin’s value from the remaining cents
    }
  }
  return coins; // Return the coins object
}

console.log(fewestCoinChange(25));
console.log(fewestCoinChange(50));
console.log(fewestCoinChange(9));
console.log(fewestCoinChange(99));
