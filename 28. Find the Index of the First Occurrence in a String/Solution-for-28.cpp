#include <iostream>
#include <string>

class Solution {
public:
    int strStr(std::string haystack, std::string needle) {
        // If needle is an empty string, return 0
        if (needle.empty()) {
            return 0;
        }
        
        // Find the position of needle in haystack
        size_t pos = haystack.find(needle);
        
        // If found, return the position; otherwise, return -1
        return (pos != std::string::npos) ? static_cast<int>(pos) : -1;
    }
};

// // Example usage
// int main() {
//     Solution solution;

//     // Output the result
//     std::cout << solution.strStr("sadbutsad", "sad") << std::endl; // 0
//     std::cout << solution.strStr("leetcode", "leeto") << std::endl; // -1

//     return 0;
// }