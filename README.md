# Unexpected String Concatenation in JavaScript

This example demonstrates a common error in JavaScript caused by its dynamic typing. When adding a number and a string, JavaScript performs string concatenation instead of numerical addition.

## Bug
The `foo` function attempts to add a number and a string.  However, JavaScript treats the addition as string concatenation, resulting in '12' instead of 3.

## Solution
The solution involves type checking or explicit type conversion to ensure that both inputs are numbers before performing the addition.