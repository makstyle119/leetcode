/**
 * Searches for a target number in a sorted array and returns the index where it should be inserted to maintain sorted order.
 * 
 * @param nums A sorted array of numbers.
 * @param target The number to search for.
 * @return The index where the target number should be inserted.
 */
function searchInsert(nums: number[], target: number): number {
    // Initialize the result to the length of the array, in case the target is greater than all elements
    let res: number = nums.length;
    
    // Iterate through the array to find the first element that is greater than or equal to the target
    for (let i = 0; i < nums.length; i++) {
        // If we find an element that is greater than or equal to the target, update the result and break the loop
        if (nums[i] >= target) {
            res = i;
            break;
        }
    }
    
    // Return the result, which is the index where the target should be inserted
    return res;
};

// // Example usage
// // Output the result
// console.log(searchInsert([1,3,5,6], 5)); // 2
// console.log(searchInsert([1,3,5,6], 2)); // 1
// console.log(searchInsert([1,3,5,6], 7)); // 4
