class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        # If needle is an empty string, return 0
        if needle == "":
            return 0
        
        # Find the position of needle in haystack
        pos = haystack.find(needle)
        
        # If found, return the position; otherwise, return -1
        return pos if pos != -1 else -1

# # Example usage
# solution = Solution()

# # Output the result
# print(f"{solution.strStr("sadbutsad", "sad")}") # 0
# print(f"{solution.strStr("leetcode", "leeto")}") # -1
