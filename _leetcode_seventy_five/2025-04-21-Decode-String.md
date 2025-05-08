---
layout: default
title: "Num. 26 - Decode String"
slug: "Num26"
date: 2025-04-21 12:00:00 +0800
permalink: /leetcode-75/Num26/
---

# Num. 26 - Decode String

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there will not be input like `3a` or `2[4]`.

The test cases are generated so that the length of the output will never exceed `105`.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: s = "3[a]2[bc]"  
Output: "aaabcbc"
#### Example 2:
Input: s = "3[a2[c]]"  
Output: "accaccacc"
#### Example 3:
Input: s = "2[abc]3[cd]ef"  
Output: "abcabccdcdcdef"
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
var decodeString = function(s) {
    // 存储 times 的栈以及存储已经保存好的需要重复的元素的栈
    let timesStack = [];
    let eleStack = [];

    // 临时存储当前搜索到的数字和栈
    let currTimes = 0;
    let currStr = '';

    // 开始遍历字符串
    for(let n of s) {
        if(!isNaN(n)) {   // 是数字
            currTimes = currTimes * 10 + Number(n);
        } else if(n === '[') {   // 是左括号，代表要重复的元素开始了，先把现在保存好的装到栈里
            timesStack.push(currTimes);
            eleStack.push(currStr);
            currStr = '';
            currTimes = 0;
        } else if(n === ']') {   // 是右括号，说明都搜索完了，可以开始组装了
            let repeatTimes = timesStack.pop();
            let preStr = eleStack.pop();
            currStr = preStr + currStr.repeat(repeatTimes);
        } else {
            currStr += n
        }
    }

    return currStr; 
};
</code></pre>

![image]({{ "/assets/images/leetcode/Decode-String.png" | relative_url }})

{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、`isNaN()` 是什么方法**

- **`isNaN()` 是什么？**

    - 是 JavaScript 的一个内置函数，用于判断一个值是不是 **NaN**

    - 语法：**`isNaN(value)`**

    - 如果是 **非数字**，返回 `true`；如果是数字，返回 `false`

    - **`!isNaN(value)`**：表示当前字符是数字

- **举例说明：**`!isNaN("3")     // true，是数字`

### **二、`.repeat()` 是什么方法**

- **用途：**

    - `.repeat(n)` 是字符串的内置方法，用来 **重复当前字符串 n 次**

- **举例说明：**`"a".repeat(5)   // 返回 "aaaaa"`


{% include hr_write_word.html text="END" %}