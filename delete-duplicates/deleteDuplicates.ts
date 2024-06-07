/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head;
    let prev = null;
    console.log("the list of the head before", head);
    while (current) {
        if (prev && prev.val === current.val) {
            while (current && prev.val === current.val) {
            prev.next = current.next
            current = current.next
            }
        }
        if (!current) {
            return head;
        }
        prev = current
        current = current.next
    }
    console.log("the list of the head", head);
    return head;
};