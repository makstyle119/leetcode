/**
 * Finds the index of the first occurrence of a substring (`needle`) in a string (`haystack`).
 * 
 * @param {string} haystack The string to search in.
 * @param {string} needle The substring to search for.
 * @returns {number} The index of the first occurrence of `needle` in `haystack`, or -1 if not found.
 */
function strStr(haystack: string, needle: string): number {
    // Handle edge case where needle is an empty string
    if (needle === "") return 0; // Return 0 as per problem definition

    // Iterate over the haystack, considering substrings of the same length as the needle
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let match = true; // Assume the current substring matches the needle

        // Compare characters of the current substring with the needle
        for (let j = 0; j < needle.length; j++) {
            // If a mismatch is found, set match to false and break the loop
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        // If the entire substring matches the needle, return its starting index
        if (match) return i;
    }

    // If no match is found after iterating over the entire haystack, return -1
    return -1;
}

// // Example usage
// // Output the result
// console.log(strStr("sadbutsad", "sad")); // 0
// console.log(strStr("leetcode", "leeto")); // -1
