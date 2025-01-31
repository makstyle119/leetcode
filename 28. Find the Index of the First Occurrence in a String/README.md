# [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

## Intuition
The problem involves finding the starting index of the first occurrence of the substring (`needle`) within the larger string (`haystack`).

## Approach
The provided code leverages the built-in search method of the JavaScript String object.

## Explanation
1. `haystack.search(needle):` 
    - This line calls the `search` method on the `haystack` string, passing the `needle` substring as an argument.
    - The `search` method returns the index of the first occurrence of the `needle` substring within the `haystack` string, or -1 if the substring is not found.

## Complexity
- Time complexity:
    - The built-in `search` method is generally implemented using efficient algorithms like the Boyer-Moore algorithm, which has an average time complexity of O(n + m), where 'n' is the length of the `haystack` string and 'm' is the length of the `needle` substring.
    - In the worst case (where the substring is not found), the time complexity can be **O(n*m)**.

- Space complexity:
    - The code uses a constant amount of extra space for variables and function calls.
    - Therefore, the space complexity is **O(1)**.

## Code
```typescript []
function strStr(haystack: string, needle: string): number {
    return haystack.search(needle);
};
```

## Alternative Approach (for educational purposes):
While the provided code using search is efficient and concise, here's an alternative approach for educational purposes that implements a simple search loop:

## Code
```typescript []
function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0; // Handle empty needle case

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}
```

This code iterates through the `haystack` string and compares characters in the `needle` substring. If a complete match is found, it returns the starting index. Otherwise, it returns -1.

**Note:** This alternative approach has a time complexity of **O((n - m) * m)**, which is generally less efficient than the built-in `search` method. The provided code using `search` is recommended for most practical use cases.