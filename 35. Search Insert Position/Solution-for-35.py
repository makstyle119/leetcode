from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        """
        Searches for a target number in a sorted array and returns the index where it should be inserted to maintain sorted order.
        
        Args:
            nums (List[int]): A sorted array of numbers.
            target (int): The number to search for.
        
        Returns:
            int: The index where the target number should be inserted.
        """
        # Initialize the result to the length of the array, in case the target is greater than all elements
        res = len(nums)
        
        # Iterate through the array to find the first element that is greater than or equal to the target
        for i in range(len(nums)):
            # If we find an element that is greater than or equal to the target, update the result and break the loop
            if nums[i] >= target:
                res = i
                break
        
        # Return the result, which is the index where the target should be inserted
        return res

# # Example usage
# solution = Solution()

# # Output the result
# print(solution.searchInsert([1,3,5,6], 5)) # 2
# print(solution.searchInsert([1,3,5,6], 2)) # 1
# print(solution.searchInsert([1,3,5,6], 7)) # 4