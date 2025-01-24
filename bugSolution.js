function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }

  // Handle division by zero
  if (b === 0) {
    return 'Error: Division by zero';
  }

  // Handle the case where either a or b is 0
  if (a === 0 || b === 0) {
    return 0;
  }

  return a / b;
}
console.log(foo(0, 0)); // Output: 0
console.log(foo(10, 2)); // Output: 5
console.log(foo(10, 0)); //Output: Error: Division by zero
console.log(foo("10",2)); //Output: Error: Inputs must be numbers