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

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
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

## **Solution via Comments / GPT** 
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

{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、欧几里得算法**

- **概念：**
    - 欧几里得算法（GCD算法）用于计算两个正整数的最大公约数。
- **基本思想：**
    - 当 `b === 0` 时，最大公约数就是 `a`。
    - 否则，递归调用 `gcd(b, a % b)`，直到 `b` 为 0。
- **实现方式：递归法与循环法**
    - 递归法更简洁，但深度递归可能导致栈溢出。
    - 循环法更节省内存，适合更大的数字。
    
    ```jsx
    // 递归法（两种写法）
    let gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    // 循环法
    function gcd(a, b) {
        while(b !== 0) {
            let temp = b;
            b = a%b;
            a = temp;
        }
        return a;
    }
    ```
    
![image]({{ "/assets/images/leetcode/Euclidean-algorithm.png" | relative_url }})

### **二、substring() 方法**

- **`substring()` 方法**
    - 用于提取字符串中指定索引范围内的子字符串。

    - 语法：`string.substring(startIndex, endIndex)`

        - `startIndex`：开始位置（包含）
        - `endIndex`：结束位置（不包含）
        - 如果 `endIndex` 省略，则返回从 `startIndex` 到结尾的所有字符。
    - 不修改原字符串，返回新字符串。

    ```jsx
    let str = "Hello, World!";
    console.log(str.substring(0, 5)); // 输出: "Hello"
    console.log(str.substring(7));    // 输出: "World!"
    console.log(str);                  // 原字符串未改变："Hello, World!"
    ```

### **三、字符串、数组、对象操作**

- **字符串的截取、添加方法：**
    
    
    | 方法 | 作用 | 是否改原值 | 语法 | 备注 |
    | --- | --- | --- | --- | --- |
    | `substring()` | **截取**子字符串 | 否 | `str.substring(start, end)` | 提取 `start` 到 `end`（不含 `end`）不支持负数；start > end 会自动交换 |
    | `slice()` | **提取**字符串片段 | 否 | `str.slice(start, end)` | 类似 `substring`，但支持负数；不交换参数顺序 |
    | `concat()` | **合并**字符串 | 否 | `str1.concat(str2, ...)` | 类似 `+` 拼接，实际开发中更推荐使用 `+` 或模板字符串 |
    | `replace()` | 替换字符串中的内容 | 否 | `str.replace(pattern, replacement)` | 默认只替换第一个匹配项；替换所有需用正则 `/pattern/g` |
    | `split()` | 按指定分隔符**切分字符串为数组** | 否 | `str.split(separator)` | 常用于切割文本（如按空格、逗号）；支持正则作为分隔符 |
    | `includes()` | 判断是否**包含指定子字符串** | 否 | `str.includes(substring)` | 返回布尔值；区分大小写 |
    | `indexOf()` | 查找**子字符串首次出现的位置** | 否 | `str.indexOf(substring, fromIndex)` | 找不到返回 `-1`；第二个参数可指定起始查找位置 |
- **数组的截取、添加方法：**
    
    
    | 方法 | 作用 | 是否修改原值 | 语法 | 备注说明 |
    | --- | --- | --- | --- | --- |
    | `slice()` | 截取数组的一部分 | 否 | `arr.slice(start, end)` | 返回新数组，`end` 不包含，支持负索引 |
    | `splice()` | 添加、删除或替换数组元素 | ✅ 是 | `arr.splice(start, deleteCount, ...items)` | 原地修改数组，常用于插入/删除/替换 |
    | `concat()` | 合并数组 | 否 | `arr.concat(arr2, arr3, ...)` | 返回新数组，不影响原数组 |
    | `push()` | 添加元素到数组末尾 | ✅ 是 | `arr.push(element1, element2, ...)` | 返回新长度；支持添加多个元素 |
    | `pop()` | 移除数组的最后一个元素 | ✅ 是 | `arr.pop()` | 返回被移除的元素 |
    | `shift()` | 移除数组的第一个元素 | ✅ 是 | `arr.shift()` | 返回被移除的元素 |
    | `unshift()` | 添加元素到数组开头 | ✅ 是 | `arr.unshift(element1, element2, ...)` | 返回新长度；支持添加多个元素 |

**4. 对象的截取、添加方法：**

| 方法 | 作用 | 是否修改原值 | 语法 | 备注 |
| --- | --- | --- | --- | --- |
| `Object.assign()` | 浅拷贝或合并对象 | 否 |  |  |
| `delete obj[key]` | 删除对象的属性 | 是 |  |  |
| `Object.keys()` | 获取所有键名 | 否 |  |  |
| `Object.values()` | 获取所有键值 | 否 |  |  |
| `Object.entries()` | 获取键值对数组 | 否 |  |  |
| `JSON.parse(JSON.stringify(obj))` | 深拷贝 | 否 |  |  |