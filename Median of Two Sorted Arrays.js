/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   nums1.concat(nums2);
    var newSorted = (nums1.concat(nums2)).sort(function(a,b){return a - b});
    console.log(newSorted)
    if ((newSorted.length % 2) == 1) {
        var medlengthvalue = Math.floor(newSorted.length / 2);
        return newSorted[medlengthvalue].toFixed(5);
    } else {
        var medlengthvalue = Math.floor(newSorted.length / 2);
        console.log(medlengthvalue)
        return ((newSorted[medlengthvalue-1] + newSorted[medlengthvalue]) / 2).toFixed(5);
    }  
};