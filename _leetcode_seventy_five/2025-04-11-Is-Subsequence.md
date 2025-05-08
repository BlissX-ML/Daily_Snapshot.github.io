---
layout: default
title: "Num. 11 - Is Subsequence"
slug: "Num11"
date: 2025-04-11 11:00:00 +0800
permalink: /leetcode-75/Num11/
---

# Num. 11 - Is Subsequence

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given two strings `s` and `t`, return `true` *if* `s` *is a **subsequence** of* `t`*, or* `false` *otherwise*.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: s = "abc", t = "ahbgdc"  
Output: true
#### Example 2:
Input: s = "axc", t = "ahbgdc"  
Output: false
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var isSubsequence = function(s, t) {
    let tArray = t.split('');
    let compare = '';
    for(let n of tArray){
        if(s.includes(n)){
            compare += n;
        }
    }
    if(s === compare) {
        return true
    } else {
        return false
    }
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
// 用 s 去匹配 t，匹配上 s 指针才前进，t 不管是否匹配都要前进
var isSubsequence = function(s, t) {
    let i=0, j=0;
    while(i < s.length && j < t.length){
        if(s[i] === t[j]){
            i++;
        }
        j++;
    }
    return s.length === i
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、子序列判断题（isSubsequence）总结：**

- 以 **短字符串 s** 为基础，遍历 **长字符串 t** 来查找是否能按顺序匹配完 s 中所有字符。

    - 用两个指针分别遍历 `s` 和 `t`

    - 如果字符相等，就推进 `s` 的指针（表示找到当前字符）

    - 无论是否相等，`t` 的指针都要前进

    - 最终看 `s` 是否完全被扫描完（`i === s.length`）

- **什么是子序列？**

    - **子序列**：在不改变顺序的前提下，从原字符串中删除某些字符得到的字符串。

    - **关键点：顺序必须一致，不一定连续。**


### **二、双指针（two pointers）**

- 一种策略，**不限方向**

- 两个指针**分别用于两个位置**，也可以在两个数组或一个数组不同位置上，按需求移动。

    - 可以同向推进（如判断子序列）

    - 也可以对向移动（如左右夹逼）

    - 也可以一个快、一个慢（如链表快慢指针）


### **三、左右指针（left/right pointers）**

- 一种**特殊的双指针**

- 通常用于**数组或字符串的一头一尾**，从两边往中间走。

- **常见于：**

    - 回文判断

    - 对撞型查找（如两数之和）

    - 滑动窗口边界


### **四、双指针与左右指针的举例对比：**

- **左右指针** 是双指针的一种特例，属于 **从两端逼近** 的策略；

- **双指针**更广泛，也可以用于同向、快慢、不对称等情况。
    
<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| 场景 | 写法 | 类型 |
| --- | --- | --- |
| 判断子序列 | `let i = 0, j = 0; while(i < s.length && j < t.length)` | 双指针（同向推进） |
| 回文判断 | `let left = 0, right = str.length - 1; while (left < right)` | 左右指针（对向推进） |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


### **五、双指针的使用场景**

1. **适合**使用双指针的情况

    - 特征一：**在两个子结构之间做对比**（比如两个数组、两个字符串）

        - 判断子序列（两个字符串）

        - 合并两个有序数组

        - 比较链表、数组中不同段

    - 特征二：**优化嵌套循环（O(n²)）为线性遍历（O(n)）**

        - 两数之和（可排序 + 对撞指针）

        - 盛最多水的容器

        - 移动 0（同向双指针）

        - 最长连续子序列（滑动窗口）

2. **不适合**使用双指针的情况

    - 比如要求比较 **所有组合**（真的是需要 n²，比如暴力找三元组）

    - 每一层循环都有完全不同的含义（比如一个循环是遍历区间，另一个是深度搜索）

3. 判断口诀：

    - 两个维度比较 ，可以试着双指针

    - 两个字符串/数组有序 or 顺序相关，极大概率可以用双指针优化

    - 能前进就前进，能缩就缩，指针之间对话，就是双指针的核心思想

4. 示例对比：
    
<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| 场景 | 暴力解法 | 优化思路 |
| --- | --- | --- |
| 判断子序列 | 嵌套循环挨个比 | 同向双指针 |
| 回文判断 | 对称比较 | 左右指针 |
| 两数之和 | 两层循环比所有组合 | 排序 + 对撞双指针 |
| 移动 0 | 遍历 + 删除 + 插入 | 双指针覆盖 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

{% include hr_write_word.html text="END" %}