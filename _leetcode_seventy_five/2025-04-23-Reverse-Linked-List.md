---
layout: default
title: "Num. 31 - Reverse Linked List"
slug: "Num31"
date: 2025-04-23 12:00:00 +0800
permalink: /leetcode-75/Num31/
---

# Num. 31 - Reverse Linked List

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given the head of a singly linked list, reverse the list, and return the reversed list.

            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Reverse-Linked-List-example1.jpg' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
style="max-width: 18em;"
/>
Input: head = [1,2,3,4,5]  
Output: [5,4,3,2,1]

#### Example 2:
<img 
src="{{ '/assets/images/leetcode/Reverse-Linked-List-example2.jpg' | relative_url }}" 
alt="Example2"
class="leetcode-example-image" 
style="max-width: 6em;"
/>
Input: head = [1,2]  
Output: [2,1]

#### Example 3:
Input: head = []  
Output: []

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var reverseList = function(head) {
    if(!head || !head.next) return head;

    let prev = null;  // 保存当前节点
    let first = head;  // 1
    let second = head.next;  // 2
    let reversed = second;  // 2 开头的列表

    while(second && second.next) {
        prev = second.next;  // 3
        second.next = first;  // 2➡1
        first = prev;  // 3
        second = prev.next;  // 4
    }

    return reversed;
}; 
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var reverseList = function(head) {
    let prev = null;
    let curr = head;  // 1

    while(curr) {
        let nextPoint = curr.next;  // 2
        curr.next = prev;  // 1 ➡ null
        prev = curr;  // prev = 1
        curr = nextPoint; // 2
    }

    return prev;
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、链表的基本结构**

- 每个节点包含：

    - `val`: 当前节点的值

    - `next`: 指向下一个节点的指针

    ```jsx
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    ```

### **二、常见链表操作通用解法**

1. **遍历链表模板**

    ```jsx
    let curr = head;
    while (curr) { curr = curr.next; }
    ```

1. **反转链表的模板逻辑（核心！）**

    - **通用原则**：一次循环，只做一次 .next 的指向改变，确保链表结构不会断裂或丢失。

    ```jsx
    let prev = null;
    let curr = head;

    while (curr) {
        let next = curr.next;  // 保存原链
        curr.next = prev;      // 🔁 本轮唯一修改链接的位置
        prev = curr;
        curr = next;
    }
    ```

### **三、链表问题中的常用指针策略**

<div style="margin-left: 0em;">
{% capture tableIndent %}
| 指针名 | 含义 | 常见作用 |
| --- | --- | --- |
| `head` | 链表头部 | 通常作为入口 |
| `prev` | 前一个节点 | 反转、删除节点时需要 |
| `curr` | 当前节点 | 主遍历指针 |
| `next` | 临时保存下一个节点 | 防止链表断开 |
| `slow` / `fast` | 慢指针 / 快指针 | 用于找中点、判断环 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


### **四、链表的操作总结**

<div style="margin-left: 0em;">
{% capture tableIndent %}
| 操作 | 描述 | 关键点 |
| --- | --- | --- |
| 遍历 | 从头到尾遍历每个节点 | `curr = curr.next` |
| 反转 | 改变每个节点的 `.next` 指向 | 一次循环改一次连接 |
| 删除 | 让`前一个节点 .next = 要删节点.next` | 一定要提前保存前一个节点 |
| 找中点 | 快慢指针 | `slow += 1, fast += 2` |
| 合并 | 同时操作两个链表指针 | 一般使用 dummy 节点 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


### **五、链表 VS 数组**

<div style="margin-left: 0em;">
{% capture tableIndent %}
| 特点 | 链表 | 数组 |
| --- | --- | --- |
| 插入删除效率 | ✅ 快（O(1)） | ❌ 慢（O(n)） |
| 随机访问 | ❌ 不支持 | ✅ 快速 |
| 内存结构 | 不连续（动态） | 连续 |
| 是否适合频繁修改结构 | ✅ 非常适合 | ❌ 不适合 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

{% include hr_write_word.html text="END" %}
