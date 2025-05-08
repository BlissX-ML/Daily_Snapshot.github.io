---
layout: default
title: "Num. 17 - Longest Subarray of 1's After Deleting One Element"
slug: "Num17"
date: 2025-04-16 11:00:00 +0800
permalink: /leetcode-75/Num17/
---

# Num. 17 - Longest Subarray of 1's After Deleting One Element

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given a binary array `nums`, you should delete one element from it.

Return *the size of the longest non-empty subarray containing only* `1`*'s in the resulting array*. Return `0` if there is no such subarray.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: nums = [1,1,0,1]  
Output: 3  
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
#### Example 2:
Input: nums = [0,1,1,1,0,1,1,0,1]  
Output: 5  
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
#### Example 3:
Input: nums = [1,1,1]  
Output: 2  
Explanation: You must delete one element.
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var longestSubarray = function(nums) {
    let del = 1;

    // 记录长度
    let maxLen = 0;
    let len = 0

    // 表示滑动的窗口
    let left = 0;

    // 遍历去寻找不合规的元素
    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 1) {
            len++;
        }

        if(nums[right] === 0) {
            del--;
            if(del < 0) {
                maxLen = Math.max(len, maxLen);
            }
        }
    }
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var longestSubarray = function(nums) {
    let del = 1;

    // 记录长度
    let maxLen = 0;

    // 表示滑动的窗口
    let left = 0;

    // 遍历去寻找不合规的元素
    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0)  del--;

        while(del < 0) {
            if(nums[left] === 0) del++;
            left++
        }

        maxLen = Math.max(maxLen, right - left);
    }

    return maxLen
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、这道题的滑动窗口模式总结**

1. **题目：**允许删除最多一个元素（也就是允许一个不合法点），求最长连续 1 的长度。

2. **核心逻辑：**

    - 维护一个窗口 `[left, right]`，窗口内最多允许出现一个 `0`（即只允许一次删除）

    - 当窗口不合法时（`0` 超过 1 个），不断收缩左边界（`left++`），直到合法

    - 窗口合法时，更新最大长度

3. **重点在于：**

    - 窗口合法条件是：`0` 的数量 <= 1

    - 每次只要窗口合法，就可以放心计算 `right - left` 作为当前长度

### **二、`right - left` 的含义是什么**

1. **常见误区：**

    - right 和 left 是索引，那 `right - left` 是不是缺了一个？

2. **实际理解：**

    - 如果计算的是 **包括 `right` 元素在内的数量**，就需要写 `right - left + 1`

    - 如果需要的是 **移除一个元素后的区间长度**，就写 `right - left` （本题情况）

3. 可以把 `[left, right]` 看成一扇窗户：

    - `left` 是左边窗框，`right` 是右边窗框

    - 当窗内只有一个 0 时，它是合法窗户

    - 一旦窗内多于一个 0，就“玻璃破了”，必须把左边滑出去一块重新修窗

### **三、什么时候滑动窗口？**

1. 只要窗口里不合法（比如 0 太多），就要 `left++`，直到窗口合法。

2. **快速记忆判断：**
    
<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 情况 | 行动 |
| --- | --- |
| 窗口还合法？ | 继续拓展 `right++` |
| 窗口不合法？（0 太多） | 收缩 `left++`，直到合法 |
| 每次合法状态 | 更新最大长度 `right - left` |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


{% include hr_write_word.html text="END" %}