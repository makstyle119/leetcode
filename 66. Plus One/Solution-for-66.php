<?php

class Solution {

    /**
     * Increments a number represented as an array of digits by 1.
     * 
     * @param Integer[] $digits The number to increment, represented as an array of digits.
     * @return Integer[] The incremented number, represented as an array of digits.
     */
    function plusOne($digits) {
        // Iterate through the digits from the last to the first
        for ($i = count($digits) - 1; $i >= 0; $i--) {
            // If the current digit is less than 9, we can simply increment it and return the result
            if ($digits[$i] < 9) {
                $digits[$i]++; // Increment the current digit
                return $digits; // Return the updated array
            }
            // If the current digit is 9, we need to "carry" the increment to the next digit
            $digits[$i] = 0; // Set the current digit to 0 if it was 9
        }

        // If we've reached this point, it means that all digits were 9, so we need to add a new leading 1
        array_unshift($digits, 1); // Insert 1 at the beginning
        return $digits;
    }
}

// // Example usage
// $solution = new Solution();

// // Output the result
// echo $solution->plusOne([1,2,3]) . "\n"; // [1,2,4]
// echo $solution->plusOne([4,3,2,1]) . "\n"; // [4,3,2,2]
// echo $solution->plusOne([9]) . "\n"; // [1,0]

?>