/**
 * Finds the index of the first occurrence of a substring (needle) in a string (haystack).
 * Returns -1 if the substring is not found.
 *
 * @param haystack - The string in which to search for the substring.
 * @param needle - The substring to search for.
 * @returns The index of the first occurrence of the substring, or -1 if not found.
 */
function strStr(haystack, needle) {
    return haystack.search(needle);
};

// // Example usage
// // Output the result
// console.log(strStr("sadbutsad", "sad")); // 0
// console.log(strStr("leetcode", "leeto")); // -1
