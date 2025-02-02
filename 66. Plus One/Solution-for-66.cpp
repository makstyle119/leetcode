#include <iostream>
#include <vector>

/**
 * A class that provides a method to increment a number represented as a vector of digits by 1.
 */
class Solution {
public:
    /**
     * Increments a number represented as a vector of digits by 1.
     * 
     * @param digits The number to increment, represented as a vector of digits.
     * @return The incremented number, represented as a vector of digits.
     */
    std::vector<int> plusOne(std::vector<int>& digits) {
        // Iterate through the digits from the last to the first
        for (int i = digits.size() - 1; i >= 0; i--) {
            // If the current digit is less than 9, we can simply increment it and return the result
            if (digits[i] < 9) {
                digits[i]++; // Increment the current digit
                return digits; // Return the updated vector
            }
            // If the current digit is 9, we need to "carry" the increment to the next digit
            digits[i] = 0; // Set the current digit to 0 if it was 9
        }

        // If we've reached this point, it means that all digits were 9, so we need to add a new leading 1
        digits.insert(digits.begin(), 1); // Insert 1 at the beginning
        return digits;
    }
};

// /**
//  * The main function that demonstrates the usage of the Solution class.
//  */
// int main() {
//     // Create an instance of the Solution class
//     Solution solution;

//     // Define some example inputs
//     std::vector<int> digits1 = {1, 2, 3};
//     std::vector<int> digits2 = {4, 3, 2, 1};
//     std::vector<int> digits3 = {9};

//     // Call the plusOne method for each example input
//     std::vector<int> result1 = solution.plusOne(digits1); // Increment {1, 2, 3} to {1, 2, 4}
//     std::vector<int> result2 = solution.plusOne(digits2); // Increment {4, 3, 2, 1} to {4, 3, 2, 2}
//     std::vector<int> result3 = solution.plusOne(digits3); // Increment {9} to {1, 0}

//     // Print the results (not implemented in this example)

//     return 0;
// }