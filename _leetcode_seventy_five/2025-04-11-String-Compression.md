---
layout: default
title: "DAY 5 - String Compression"
slug: "Day5_2"
date: 2025-04-11 09:00:00 +0800
permalink: /leetcode-75/Day5_2/
---

# DAY 5 - String Compression（HARD）

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given an array of characters `chars`, compress it using the following algorithm:

Begin with an empty string `s`. For each group of **consecutive repeating characters** in `chars`:

- If the group's length is `1`, append the character to `s`.
- Otherwise, append the character followed by the group's length.

The compressed string `s` **should not be returned separately**, but instead, be stored **in the input character array `chars`**. Note that group lengths that are `10` or longer will be split into multiple characters in `chars`.

After you are done **modifying the input array,** return *the new length of the array*.

You must write an algorithm that uses only constant extra space.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: chars = ["a","a","b","b","c","c","c"]  
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]  
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
#### Example 2:
Input: chars = ["a"]  
Output: Return 1, and the first character of the input array should be: ["a"]  
Explanation: The only group is "a", which remains uncompressed since it's a single character.
#### Example 3:
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]  
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].  
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var compress = function(chars) {
    let s = '';
    let count = 1;  // 因为chars[i]本身没有在数据记录之中
    if(chars.length === 1){ return chars.length }
    for(let i = 0; i < chars.length; i++){

        // 寻找下一个不是当前元素的元素
        if(chars[i] === chars[i-1]){
            i++
        } else {

            // 遍历搜索与当前元素相同的元素个数
            for(let j = i+1; j < chars.length; j++){
                if(chars[j] === chars[i]){
                    count += 1
                }
            }
        }

        // 存储当前元素到 s 变量内
        s += chars[i];
        s += count;
    }

    return s.split();
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var compress = function(chars) {
    let write = 0;  // 写入位置指针，控制压缩结果在原数组中的覆盖
    let left = 0;   // 当前字符组的起始位置，用于统计重复次数

    // 遍历数组（注意：遍历到 chars.length 是为了处理最后一组字符）
    for (let right = 0; right <= chars.length; right++) {
        // 若当前字符不同于起始字符，或到达数组末尾，表示一个字符组结束
        if (chars[right] !== chars[left] || right === chars.length) {
            chars[write] = chars[left];  // 写入当前字符
            write++;

            const count = right - left;  // 当前字符组的长度
            if (count > 1) {
                const countStr = count.toString();  // 转为字符串后逐位写入
                for (const digit of countStr) {
                    chars[write] = digit;
                    write++;
                }
            }

            left = right;  // 移动左指针到下一组字符的起始
        }
    }
    return write;
};
</code></pre>

![image]({{ "/assets/images/leetcode/String-Compression.png" | relative_url }})


{% include hr_write_word.html text="相关知识整理与扩展" %}

### 一、区分 variable++ 与 ++variable 的区别：

<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| 表达式 | `variable++` | `++variable` |
| --- | --- | --- |
| 执行顺序 | 先使用原值，再加一（后加） | 先加一，再使用新值（前加） |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

### 二、压缩字符串解题思路

1. **指针定义**

    - `write`：写入压缩结果的位置，初始为 0

    - `left`：当前连续字符组的起始下标

    - `right`：当前扫描的指针，从头到尾遍历整个数组

2. **遍历整个数组，识别每一组连续字符**

    - 使用 `right` 从头扫到尾，遇到如下两种情况时处理字符组：

        - `right === chars.length`：说明到数组末尾，强制结算当前字符组

        - `chars[right] !== chars[left]`：遇到新字符，当前字符组结束，进行压缩处理

    - **注意：**必须让 `right` 遍历到 `chars.length`，确保能处理到最后一组字符，这是种常见的尾处理技巧。

3. **在满足条件时处理字符组并写入压缩内容**

    - **写入当前字符**：`chars[write++] = chars[left]`

    - **写入字符数量**（如果数量 > 1）：

        - 用 `count = right - left` 得到当前字符组的数量

        - 将 `count.toString()` 拆成字符逐个写入，如 `"12"` → `"1"`, `"2"`

    - 最后：更新 `left = right`，开启下一组字符的压缩判断

4. **安全性说明**

    - 每次写入的内容只会写在已处理的区域内：

        - `write` 指针始终向后推进，不会越界

        - 处理的数据都是之前扫描过的，不会覆盖还未处理的字符

{% include hr_write_word.html text="END" %}