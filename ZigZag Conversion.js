/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let rows = [];
    let slop = true;
    let height = 0;

    for(let i=0;i<s.length;i++){
        if(!rows[height]){
            rows[height] = [s[i]];
        }else{
            let word = rows[height];
            word += s[i];
            rows[height] = word;
        }
        
        if(slop){
            height++;
        }else{
            height --;
        }
        
        if(height == numRows-1 || height == 0){
            slop = !slop;
        }
    }
    return rows.join("")
};