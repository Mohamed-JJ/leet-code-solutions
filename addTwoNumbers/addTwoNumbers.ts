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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let ret: ListNode | null = null;
  let carry: bigint = 0n;

  let dummy = new ListNode();
  let current = dummy;

  while (l1 !== null || l2 !== null || carry !== 0n) {
    const val1 = l1 ? BigInt(l1.val) : 0n;
    const val2 = l2 ? BigInt(l2.val) : 0n;

    const sum = val1 + val2 + carry;
    const digit = Number(sum % 10n);
    carry = sum / 10n;

    current.next = new ListNode(digit);
    current = current.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
}
