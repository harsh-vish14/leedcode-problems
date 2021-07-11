/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    
    let target = head;
    let slowPointer = head
    for(let i=0;i<n;i++){
        target = target.next
    }
    if(!target){
        return head.next
    }
    while(target.next){
        target = target.next;
        slowPointer = slowPointer.next;
    }
    slowPointer.next = slowPointer.next.next;
    return head
   
};





