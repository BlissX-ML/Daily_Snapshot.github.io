---
layout: default
title: "Num. 30 - Odd Even Linked List"
slug: "Num30"
date: 2025-04-23 11:00:00 +0800
permalink: /leetcode-75/Num30/
---

# Num. 30 - Odd Even Linked List

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.

The **first** node is considered **odd**, and the **second** node is **even**, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img
src = "{{ '/assets/images/leetcode/Odd-Even-Linked-List-example1.jpg' | relative_url}}"
alt="Example1"
class="leetcode-example-image"
style="max-width: 18em;"
/>
Input: head = [1,2,3,4,5]  
Output: [1,3,5,2,4]  

#### Example 2:
<img
src = "{{ '/assets/images/leetcode/Odd-Even-Linked-List-example2.jpg' | relative_url}}"
alt="Example2"
class="leetcode-example-image"
style="max-width: 25em;"
/>
Input: head = [2,1,3,5,6,4,7]  
Output: [2,3,6,7,1,5,4]

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var oddEvenList = function(head) {
    let prevOdd = null;
    let prevEven = null;
    let odd = head;
    let even = head.next;

    while(odd.next || even.next) {
        prev = odd;  // 1
        prevEve = even;  // 2
        prev.next = prevEven.next;  // 1 ➡ 3，跨过prevEve
        odd = odd.next.next;  // 3
        odd.next = prevEven;
        even = even.next.next;  // 4
    }

    return head;
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var oddEvenList = function(head) {
    if(!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let oddTable = even;

    while(even && even.next) {
        // 奇数的
        odd.next = even.next;
        odd = odd.next;

        // 更新偶数的
        even.next = odd.next;
        even = even.next;
    }

    odd.next = oddTable;
    return head;
};
</code></pre>

![image]({{ "/assets/images/leetcode/Odd-Even-Linked-List.png" | relative_url }})

{% include hr_write_word.html text="END" %}

