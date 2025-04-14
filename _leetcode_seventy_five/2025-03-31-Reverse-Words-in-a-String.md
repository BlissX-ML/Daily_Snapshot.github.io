---
layout: default
title: "DAY4 - Reverse Words in a String"
slug: "Day4_1"
date: 2025-03-31 10:00:00 +0800
permalink: /leetcode-75/Day4_1/
---

# DAY 4 - Reverse Words in a String
<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given an input string `s`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.

Return *a string of the words in reverse order concatenated by a single space.*

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: s = "the sky is blue"  
Output: "blue is sky the"
#### Example 2:
Input: s = "  hello world  "  
Output: "world hello"  
Explanation: Your reversed string should not contain leading or trailing spaces.
#### Example 3:
Input: s = "a good   example"  
Output: "example good a"  
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var reverseWords = function(s) {
    var result = "";
    for(var i = s.length-1; i < 0; i--){
        if(s[i] === " " && s[i + 1] !== " "){
            let temp = s.length;
            let word = s.substring(i+1, temp);
            console.log(word)
            result += word + " ";
            temp = i;
        }
        return result;
    }   
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};
</code></pre>
<pre><code class="language-js">
var reverseWords = function(s) {
    // 第一步：清洗字符串（去除首尾空格 & 合并中间多余空格）
    s = s.trim().replace(/\s+/g, ' ');

    var result = [];      // 存储结果单词
    var word = "";         // 收集当前单词字符

    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            word = s[i] + word;  // 非空格则收集字符
        } else {
            if (word !== '') {
                result.push(word);  // 遇到空格且已有单词，存入结果
                word = '';
            }
        }
    }

    // 循环结束后，字符串最前面那个单词还没被 push（因为前面没空格触发 else）
    // 所以这里做一次补漏处理
    if (word !== '') {
        result.push(word);
    }

    return result.join(' ');  // 用一个空格拼接所有单词
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}


### 一、字符串方法介绍

**1. `.trim()`**

- **语法**：**`string.trim()`**

- 功能：去除字符串两端的所有空格（包括换行、制表符、空格等）。

- 示例：`"  hello world  ".trim();   // 输出："hello world"（trim: 修剪）`

**2. `.split(/\s+/)`**

- **语法**：**`string.split(regex)`**

- 功能：根据正则表达式分割字符串。

- **`/\s+/`** 表示用一个或多个空白字符（空格、制表符、换行）作为分隔符。

- 示例：`"a   b c".split(/\s+/);  // 输出：["a", "b", "c"]`

**3. `.reverse()`**

- **语法**：`array.reverse()`

- 功能：反转数组中的元素顺序。

- **注意：只能用于数组**，不能直接用于字符串。

- 示例：`["a", "b", "c"].reverse(); // 输出：["c", "b", "a"]`

**4. `.join(' ')`**

- **语法**：`array.join(separator)`

- 功能：将数组中的元素连接为一个字符串

- **参数**：`separator` 是连接用的符号（比如空格、逗号等）。

- 示例：`["hello", "world"].join(", ");   // 输出："hello, world"`

### 二、正则表达式 `/\s+/` 的说明

- **`/\s+/` 的含义：**  

    - `\s`：匹配 **任意空白字符**（空格、Tab、换行...）  

    - `+`：匹配 **1 个或多个连续空白字符**

    - **`/\s+/`**：把多个空格看作**一个分隔点**

- **常见正则扩展：**

<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 正则 | 含义 |
| --- | --- |
| `\s` | 匹配一个空白字符（s → space） |
| `\S` | 匹配一个非空白字符 |
| `\d` | 匹配 0-9 的一个数字（d → data） |
| `\D` | 匹配一个非数字字符 |
| `\w` | 匹配字母、数字、下划线，即单词字符（w → word） |
| `\W` | 匹配非单词字符 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>
    

### 三、`replace(/\s+/g, ' ')` 方法

- **语法**：`string.replace(pattern, replacement)`

    - 第一个参数 `pattern`：是一个正则表达式或字符串。

    - 第二个参数 `replacement`：是要替换成的内容。

- **`/\s+/g` 是什么意思？**

    - `/\s+/`：匹配多个连续空白字符。

    - `g`：表示全局匹配，替换**所有**匹配项。

- **`' '` 是什么？**

    - 是替换用的字符，也就是把所有连续空格统一替换为一个普通空格。

- **示例：**`"  a   good   example  ".replace(/\s+/g, ' ');   // 输出：" a good example "`