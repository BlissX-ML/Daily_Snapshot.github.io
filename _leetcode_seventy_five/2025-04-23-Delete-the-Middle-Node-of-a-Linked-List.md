---
layout: default
title: "Num. 29 - Delete the Middle Node of a Linked List"
slug: "Num29"
date: 2025-04-23 10:00:00 +0800
permalink: /leetcode-75/Num29/
---

# Num. 29 - Delete the Middle Node of a Linked List

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
You are given the `head` of a linked list. **Delete** the **middle node**, and return *the* `head` *of the modified linked list*.

The **middle node** of a linked list of size `n` is the `⌊n / 2⌋th` node from the **start** using **0-based indexing**, where `⌊x⌋` denotes the largest integer less than or equal to `x`.

- For `n` = `1`, `2`, `3`, `4`, and `5`, the middle nodes are `0`, `1`, `1`, `2`, and `2`, respectively.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img
  src="{{ '/assets/images/leetcode/Delete-the-Middle-Node-of-a-Linked-List-Example1.png' | relative_url }}"
  alt="Example1"
  class="leetcode-example-image"
  style="max-width: 18em;"
/>
Input: head = [1,3,4,7,1,2,6]  
Output: [1,3,4,1,2,6]  
Explanation:  
The above figure represents the given linked list. The indices of the nodes are written below.  
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.  
We return the new list after removing this node.

#### Example 2:
<img
  src="{{ '/assets/images/leetcode/Delete-the-Middle-Node-of-a-Linked-List-Example2.png' | relative_url }}"
  alt="Example2"
  class="leetcode-example-image"
  style="height: auto; max-width: auto;"
/>
Input: head = [1,2,3,4]  
Output: [1,2,4]  
Explanation:  
The above figure represents the given linked list.  
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

#### Example 3:
<img
  src="{{ '/assets/images/leetcode/Delete-the-Middle-Node-of-a-Linked-List-Example3.png' | relative_url }}"
  alt="Example3"
  class="leetcode-example-image"
  style=" max-width: 5em;"
/>
Input: head = [2,1]  
Output: [2]  
Explanation:  
The above figure represents the given linked list.  
For n = 2, node 1 with value 1 is the middle node, which is marked in red.  
Node 0 with value 2 is the only node remaining after removing node 1.

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var deleteMiddle = function(head) {
    let len = head.length;
    let middle = Math.floor(len / 2);

    let result_left = head.slice(0, middle);
    let result_right = head.slice(middle + 1);
    
    return result_left.concat(result_right)
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var deleteMiddle = function(head) {
    if(!head || !head.next) return null;

    let prev = null;
    let slow = head;
    let fast = head;

		// 注意：链表中的连接关系不同于简单赋值。
		// 这里表示的是 prev → slow → slow.next 的节点指向关系，而非变量赋值 prev = slow = slow.next
    while(fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next;

    return head;
};
</code></pre>

![image]({{ "/assets/images/leetcode/Delete-the-Middle-Node-of-a-Linked-List.png" | relative_url }})

{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、链表模板总结**

1. **初始化双指针变量**：常见如 `let slow = head`, `fast = head`;（根据题意也可设置为 `fast = head.next`）

2. **边界条件判断**：在函数开始处加上 `if (!head || !head.next) return head/null`; 防止链表为空或只有一个节点时出错

3. **设置循环条件**：通常使用 `while (fast && fast.next)`，因为 `fast` 每次移动两步，需要保证它和它的下一步都存在，避免报错



{% include hr_write_word.html text="END" %}