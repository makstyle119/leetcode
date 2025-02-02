/**
 * Increments a number represented as an array of digits by 1.
 * 
 * @param {number[]} digits - The number to increment, represented as an array of digits.
 * @returns {number[]} The incremented number, represented as an array of digits.
 */
function plusOne(digits: number[]): number[] {
    // Iterate through the digits from right to left (i.e., from least significant to most significant)
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the current digit is less than 9, we can simply increment it and return the result
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        // If the current digit is 9, we need to "carry" the increment to the next digit
        digits[i] = 0;
    }

    // If we've reached this point, it means that all digits were 9, so we need to add a new most significant digit (1)
    digits.unshift(1);
    return digits;
};

// // Example usage
// // Output the result
// console.log(plusOne([1,2,3])); // [1,2,4]
// console.log(plusOne([4,3,2,1])); // [4,3,2,2]
// console.log(plusOne([9])); // [1,0]