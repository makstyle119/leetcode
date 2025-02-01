# [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)

# Intuition
The problem involves finding the correct position to insert a target value into a sorted array of integers.

# Approach
1. **Initialization:**
    - `let res: number = nums.length;:` Initializes a variable `res` with the length of the `nums` array. This represents the default position to insert the target if it's greater than all elements in the array.
2. **Linear Search:**
    - `for (let i = 0; i < nums.length; i++) { ... }:` This loop iterates through the `nums` array.
    - `if (nums[i] >= target) { ... }:` Within the loop, it checks if the current element (`nums[i]`) is greater than or equal to the `target` value.
3. **Update Insertion Position:**
    - `res = i;:` If the condition in the `if` statement is met, it means the target value should be inserted before the current element. The `res` variable is updated to the current index (`i`).
    - `break;:` Once the correct insertion position is found, the loop is terminated using the `break` statement.
4. **Return Insertion Position:**
    - `return res;:` The function returns the `res` variable, which holds the calculated insertion position.

# Complexity
- Time complexity:
    - In the worst case, the loop iterates through the entire array.
    - Therefore, the time complexity is **O(n)**, where 'n' is the length of the `nums` array.

- Space complexity:
    - The code uses a constant amount of extra space 1 to store variables like `res` and the loop index `i`.
    - Therefore, the space complexity is **O(1)**. 

# Code
```typescript
function searchInsert(nums: number[], target: number): number {
    let res: number = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            res = i;
            break;
        }
    }
    return res;
};
```

This code effectively finds the correct position to insert a target value into a sorted array using a linear search approach.