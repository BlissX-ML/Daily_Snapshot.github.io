---
layout: default
title: "Num. 32 - Maximum Twin Sum of a Linked List"
slug: "Num32"
date: 2025-04-23 13:00:00 +0800
permalink: /leetcode-75/Num32/
---

# Num. 32 - Maximum Twin Sum of a Linked List

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
In a linked list of size `n`, where `n` is **even**, the `ith` node (**0-indexed**) of the linked list is known as the **twin** of the `(n-1-i)th` node, if `0 <= i <= (n / 2) - 1`.

- For example, if `n = 4`, then node `0` is the twin of node `3`, and node `1` is the twin of node `2`. These are the only nodes with twins for `n = 4`.

The **twin sum** is defined as the sum of a node and its twin.

Given the `head` of a linked list with even length, return *the **maximum twin sum** of the linked list*.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Maximum-Twin-Sum-of-a-Linked-List-example1.png' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
style="max-width: 12em;"
/>
Input: head = [5,4,2,1]  
Output: 6  
Explanation:  
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.  
There are no other nodes with twins in the linked list.  
Thus, the maximum twin sum of the linked list is 6.

#### Example 2:
<img 
src="{{ '/assets/images/leetcode/Maximum-Twin-Sum-of-a-Linked-List-example2.png' | relative_url }}" 
alt="Example2"
class="leetcode-example-image"
style="max-width: 12em;" 
/>
Input: head = [4,2,2,3]  
Output: 7  
Explanation:  
The nodes with twins present in this linked list are:  
● Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.  
● Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.  
Thus, the maximum twin sum of the linked list is max(7, 4) = 7.

#### Example 3:
<img 
src="{{ '/assets/images/leetcode/Maximum-Twin-Sum-of-a-Linked-List-example3.png' | relative_url }}" 
alt="Example3"
class="leetcode-example-image" 
/>
Input: head = [1,100000]  
Output: 100001  
Explanation:  
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
None
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var pairSum = function(head) {
    let arr = [];
    let curr = head;

    while(curr) {
        let value = curr.val
        arr.push(value);
        curr = curr.next;
    }

    let left = 0;
    let right = arr.length - left - 1;
    let maxSum = 0
    while(left < right) {
        let sum = arr[left] + arr[right];
        maxSum = Math.max(sum, maxSum);
        left++;
        right--
    }

    return maxSum;
};
</code></pre>

{% include hr_write_word.html text="END" %}

