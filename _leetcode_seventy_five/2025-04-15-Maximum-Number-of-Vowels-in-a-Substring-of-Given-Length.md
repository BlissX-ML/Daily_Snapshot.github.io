---
layout: default
title: "Num. 15 - Maximum Number of Vowels in a Substring of Given Length"
slug: "Num15"
date: 2025-04-15 10:00:00 +0800
permalink: /leetcode-75/Num15/
---

# Num. 15 - Maximum Number of Vowels in a Substring of Given Length

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given a string `s` and an integer `k`, return *the maximum number of vowel letters in any substring of* `s` *with length* `k`.

**Vowel letters** in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: s = "abciiidef", k = 3  
Output: 3  
Explanation: The substring "iii" contains 3 vowel letters.
#### Example 2:
Input: s = "aeiou", k = 2  
Output: 2  
Explanation: Any substring of length 2 contains 2 vowels.
#### Example 3:
Input: s = "leetcode", k = 3  
Output: 2  
Explanation: "lee", "eet" and "ode" contain 2 vowels.
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x2B55;
<pre><code class="language-js">
var maxVowels = function (s, k) {
    let arr = s.split('');
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.includes(arr[i])) {
            count++;
        }
    }

    let maxCount = count;

    for (let i = k; i < s.length; i++) {
        if (vowels.includes(arr[i - k])) {
            count--;
        }
        if (vowels.includes(arr[i])) {
            count++
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var maxVowels = function (s, k) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) count++;
    }

    let maxCount = count;

    for (let i = k; i < s.length; i++) {
        if (vowels.includes(s[i - k])) count--;
        if (vowels.includes(s[i])) count++;
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};

</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、什么时候用滑动窗口？**

- **考虑使用滑动窗口的场景：**

    - 当题目中要求查找 **连续的子串 / 子数组 / 固定长度范围** 
    
        - 最大值、最小值、和、平均数、满足条件的个数等

- **出现以下关键词时，建议优先考虑滑动窗口：**

    - 长度为 k 的子字符串 / 子数组

    - 连续的最大 / 最小 / 平均值 / 
    
    - 固定长度内满足某种条件的元素个数

    - 找出满足条件的最长连续区间 / 最短连续子数组

### **二、双指针与滑动窗口的关系**

1. **双指针**：两个指针配合工作，方向可以相同也可以相反

    - 对撞型：一个从左，一个从右，例如盛最多水的容器

    - 同向型：两个指针都从左往右移动，用于滑动扫描

2. **滑动窗口**：

    - 是**同向型双指针**的典型应用

    - 两个指针一起控制一个“窗口区间”，窗口可以是固定长度或动态变化

    - 就像一把**透明尺子**在数组上**一格一格滑过去**，每滑一次就看一眼当前窗口内的情况

3. **一句话记忆：**

    - 滑动窗口 = **同向双指针** + **固定/可变窗口区间** + **边滑边统计/更新**


{% include hr_write_word.html text="END" %}