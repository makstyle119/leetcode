#include <iostream>
#include <vector>

class Solution {
public:
    int searchInsert(std::vector<int>& nums, int target) {
        // Initialize the result to the length of the array, in case the target is greater than all elements
        int res = nums.size();
        
        // Iterate through the array to find the first element that is greater than or equal to the target
        for (int i = 0; i < nums.size(); i++) {
            // If we find an element that is greater than or equal to the target, update the result and break the loop
            if (nums[i] >= target) {
                res = i;
                break;
            }
        }
        
        // Return the result, which is the index where the target should be inserted
        return res;
    }
};

// int main() {
//     Solution solution;
//     std::vector<int> nums = {1, 3, 5, 6};

//     // Output the result
//     std::cout << solution.searchInsert(nums, 5) << std::endl; // 2
//     std::cout << solution.searchInsert(nums, 2) << std::endl; // 1
//     std::cout << solution.searchInsert(nums, 7) << std::endl; // 4

//     return 0;
// }