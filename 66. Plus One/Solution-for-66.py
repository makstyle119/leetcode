from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        """
        Increments a number represented as a list of digits by 1.
        
        Args:
            digits (List[int]): The number to increment, represented as a list of digits.
        
        Returns:
            List[int]: The incremented number, represented as a list of digits.
        """
        # Iterate through the digits from the last to the first
        for i in range(len(digits) - 1, -1, -1):
            # If the current digit is less than 9, we can simply increment it and return the result
            if digits[i] < 9:
                digits[i] += 1  # Increment the current digit
                return digits  # Return the updated list
            # If the current digit is 9, we need to "carry" the increment to the next digit
            digits[i] = 0  # Set the current digit to 0 if it was 9

        # If we've reached this point, it means that all digits were 9, so we need to add a new leading 1
        digits.insert(0, 1)  # Insert 1 at the beginning
        return digits

# # Example usage
# solution = Solution()

# # Output the result
# print(solution.plusOne([1,2,3]), "\n") # [1,2,4]
# print(solution.plusOne([4,3,2,1]), "\n") # [4,3,2,2]
# print(solution.plusOne([9]), "\n") # [1,0]