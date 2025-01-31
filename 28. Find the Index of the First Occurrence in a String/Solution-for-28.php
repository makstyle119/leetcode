<?php

class Solution {

    /**
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr($haystack, $needle) {
        // If needle is an empty string, return 0
        if ($needle === "") {
            return 0;
        }
        
        // Find the position of needle in haystack
        $pos = strpos($haystack, $needle);
        
        // If found, return the position; otherwise, return -1
        return ($pos !== false) ? $pos : -1;
    }
}

// // Example usage
// $solution = new Solution();

// // Output the result
// echo $solution->strStr("sadbutsad", "sad"); // 0
// echo $solution->strStr("leetcode", "leeto"); // -1

?>
