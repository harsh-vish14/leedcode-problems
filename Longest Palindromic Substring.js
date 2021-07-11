/*
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (string.length == 1) {
        return string;
    } else if (string.length == 2 && string[0] == string[1]) {
        return string;
    }
    var length = string.length;
    var result = "";

    var centeredPalindrome = function (left, right) {
        while (left >= 0 && right < length && string[left] === string[right]) {
            //expand in each direction.
            left--;
            right++;
        }

        return string.slice(left + 1, right);
    };

    for (var i = 0; i < length - 1; i++) {
        var oddPal = centeredPalindrome(i, i + 1);

        var evenPal = centeredPalindrome(i, i);
        if (oddPal.length > result.length)
            result = oddPal;
        if (evenPal.length > result.length)
            result = evenPal;
    }
    return result;
};