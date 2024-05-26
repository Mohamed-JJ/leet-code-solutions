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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const sort: number[] = [];
    while (list1 !== null) {
        sort.push(list1.val);
        list1 = list1.next;
    }
    while (list2 !== null) {
        sort.push(list2.val);
        list2 = list2.next;
    }
    sort.sort((a, b) => a - b);
    if (sort.length > 0) {
        const head = new ListNode(sort[0]);
        let current = head;
        for (let i = 1; i < sort.length; i++) {
            current.next = new ListNode(sort[i]);
            current = current.next;
        }
        return head;
    }
    return null;
};