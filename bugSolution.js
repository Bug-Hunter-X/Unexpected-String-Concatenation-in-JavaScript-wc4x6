function foo(a, b) {
  // Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Both arguments must be numbers.';
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: Invalid input: Both arguments must be numbers.
console.log(foo(1, 2)); // Output: 3

//Alternatively, using explicit type conversion:
function foo2(a, b) {
  return Number(a) + Number(b);
}
console.log(foo2(1, '2')); // Output: 3