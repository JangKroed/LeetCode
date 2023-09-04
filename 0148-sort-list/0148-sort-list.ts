function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
  if (!left) return right;
  if (!right) return left;

  if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow!.next;
    fast = fast!.next!.next;
  }

  prev!.next = null;

  const left: ListNode | null = sortList(head);
  const right: ListNode | null = sortList(slow);

  return merge(left, right);
}