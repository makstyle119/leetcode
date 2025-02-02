# Intuition
The problem involves incrementing an array of digits representing a non-negative integer by 1. This is similar to how we perform manual addition in decimal numbers.

# Approach
1. **Iterate from Right to Left:**
    - The code iterates through the `digits` array from right to left (from the least significant digit to the most significant digit) using a `for` loop with `i--`.
2. **Increment Digit:**
    - If the current digit (`digits[i]`) is less than 9, it is incremented by 1, and the function immediately returns the modified `digits` array. This handles cases where the increment doesn't cause a carry-over to the next digit.
3. **Handle Carry-Over:**
    - If the current digit is 9, it is set to 0, indicating a carry-over to the next digit.
4. **Handle Carry-Over to the Front:**
    - If the loop completes without finding a digit less than 9, it means all digits were 9. 
        - In this case, a new digit 1 is added to the beginning of the array using `digits.unshift(1)` to represent the carry-over.

# Complexity
- Time complexity:
    - The loop iterates through the array once.
    - All operations within the loop (checking digit value, incrementing, setting to 0) have constant time complexity.
    - Therefore, the overall time complexity is **O(n)**, where 'n' is the length of the `digits` array.

- Space complexity:
    - The code uses a constant amount of extra space to store variables like the loop index `i` and intermediate values.
    - In the worst case (all digits are 9), it might create a new element at the beginning of the array, but this still results in constant extra space usage.
    - Therefore, the space complexity is **O(1)**.

# Code
```typescript
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1); 
  return digits;
};
```

This code effectively implements the logic for incrementing an array of digits representing a non-negative integer.