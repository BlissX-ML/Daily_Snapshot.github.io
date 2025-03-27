---
layout: default
title: "DAY2 - Greatest Common Divisor of Strings"
slug: "Day2_1"
date: 2025-03-27 10:00:00 +0800
permalink: /leetcode-75/Day2_1/
---

# DAY 2 - Greatest Common Divisor of Strings
<aside class="asideDiv">
    <!-- 图标 -->
    <div>
        👉
    </div>
    <!-- 题目介绍 -->
    <div>
        <!-- 文字介绍部分 -->
        <main>
            <p style="margin: 0;">
                For two strings <code>s</code> and <code>t</code>, we say "<code>t</code> divides <code>s</code>" if and only if <code>s = t + t + t + ... + t + t</code> (i.e., <code>t</code> is concatenated with itself one or more times).
            </p>
            <p>
                Given two strings <code>str1</code> and <code>str2</code>, return <i>the largest string</i> <code>x</code> <i>such that</i> <code>x</code> <i>divides both</i> <code>str1</code> <i>and</i> <code>str2</code>.
            </p>
        </main>
        <!-- 示例部分 -->
        <main>
            <h3>Example 1:</h3>
            <!-- <pre><code class="language-plaintext"> -->
            <p class="quoteLeetcode">
            Input: str1 = "ABCABC", str2 = "ABC"<br>
            Output: "ABC"
            </p>
            <!-- </code></pre> -->
            <h3>Example 2:</h3>
            <p class="quoteLeetcode">
            Input: str1 = "ABABAB", str2 = "ABAB"<br>
            Output: "AB"
            </p>
            <h3>Example 3:</h3>
            <p class="quoteLeetcode">
            Input: str1 = "LEET", str2 = "CODE"<br>
            Output: ""
            </p>
        </main>
    </div>
</aside>


<h2><strong>Did it myself.</strong>  &#x274C;</h2>
<pre><code class="language-js">
var gcdOfStrings = function(str1, str2) {
    var result;
    if(str1.length >= str2.length){
        var compareString = str1.split(str2);
        for(var i = str2.length-1; i >= 0; i--){
            if(compareString === str2){
                result = str2;
            } else {
                compareString = str1.split(str2.split(str2[i]))
            }
        }
        return result;
    } else {
        return ""
    }
};
</code></pre>

<h2><strong>Get it from ChatGPT.</strong></h2>
<pre><code class="language-js">
var gcdOfStrings = function(str1, str2) {
    // 欧几里得算法
    if(str1 + str2 !== str2 + str1) {return ""};
    const gcd = (a, b) => b ===0 ? a : gcd(b, a % b);
    const resultLength = gcd(str1.length, str2.length);
    const result = str1.substring(0, resultLength);
    return result;
};
</code></pre>

<h2><strong>Get it from the comments section.</strong></h2>
<pre><code class="language-js">
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 !== str2+str1){
        return ""
    }

    function gcd(a,b){
        while(b!==0){
            temp = b;
            b = a % b
            a = temp
        }
        return a
    }

    let gcdLength = gcd(str1.length,str2.length)

    return str1.slice(0,gcdLength)
};
</code></pre>
<br>

---

## 一、欧几里得算法

- **概念：**
    - 欧几里得算法（GCD算法）用于计算两个正整数的最大公约数。
- **基本思想：**
    - 当 `b === 0` 时，最大公约数就是 `a`。
    - 否则，递归调用 `gcd(b, a % b)`，直到 `b` 为 0。
- **实现方式（递归法）：**

    <pre><code class="language-js">
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
// 示例
console.log(gcd(6, 3));    // 输出: 3
console.log(gcd(10, 4));   // 输出: 2
    </code></pre>


- **实现方式（循环法）：**

    <pre><code class="language-js">
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
// 示例
console.log(gcd(6, 3));    // 输出: 3
console.log(gcd(10, 4));   // 输出: 2
    </code></pre>

- **特点：**
    - 递归法更简洁，但深度递归可能导致栈溢出。
    - 循环法更节省内存，适合更大的数字。

---

## 二、substring() 方法与字符串、数组、对象操作

**1. `substring()` 方法简介**

- 用于提取字符串中指定索引范围内的子字符串。
- 语法：`string.substring(startIndex, endIndex)`。
- `startIndex`：开始位置（包含）。
- `endIndex`：结束位置（不包含）。
- 如果 `endIndex` 省略，则返回从 `startIndex` 到结尾的所有字符。
- 不修改原字符串，返回新字符串。

    <pre><code class="language-js">
let str = "Hello, World!";
console.log(str.substring(0, 5));   // 输出: "Hello"
console.log(str.substring(7));      // 输出: "World!"
console.log(str);                   // 原字符串未改变："Hello, World!"
    </code></pre>

---

**2. 字符串的截取、添加方法：**

| 方法 | 作用 | 是否修改原值 |
| --- | --- | --- |
| `substring()` | 截取子字符串 | 否 |
| `slice()` | 提取字符串的片段 | 否 |
| `concat()` | 合并字符串 | 否 |
| `replace()` | 替换字符串内容 | 否 |

---

**3. 数组的截取、添加方法：**

| 方法 | 作用 | 是否修改原值 |
| --- | --- | --- |
| `slice()` | 截取数组的一部分 | 否 |
| `splice()` | 添加、删除、或替换数组元素 | 是 |
| `concat()` | 合并数组 | 否 |
| `push()` | 添加元素到数组末尾 | 是 |
| `pop()` | 移除数组的最后一个元素 | 是 |
| `shift()` | 移除数组的第一个元素 | 是 |
| `unshift()` | 添加元素到数组开头 | 是 |

---

**4. 对象的截取、添加方法：**

| 方法 | 作用 | 是否修改原值 |
| --- | --- | --- |
| `Object.assign()` | 浅拷贝或合并对象 | 否 |
| `delete obj[key]` | 删除对象的属性 | 是 |
| `Object.keys()` | 获取所有键名 | 否 |
| `Object.values()` | 获取所有键值 | 否 |
| `Object.entries()` | 获取键值对数组 | 否 |
| `JSON.parse(JSON.stringify(obj))` | 深拷贝 | 否 |

---