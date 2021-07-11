/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let isPositive = false;
    
    if( x > 0 ) {
        isPositive = true;
    }
    
    let numInString = '';
    
    for(let i = [...x.toString()].length-1;i>=0;i--){
        numInString += [...x.toString()][i]
    }
    
    if(Math.pow(-2,31)>parseInt(numInString) || Math.pow(2,31)-1 < parseInt(numInString) ){
        return 0;
    }
    if(isPositive){
        return parseInt(numInString);
    }
    return parseInt(numInString) * -1;
};