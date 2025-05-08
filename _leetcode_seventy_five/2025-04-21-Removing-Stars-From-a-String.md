---
layout: default
title: "Num. 24 - Removing Stars From a String"
slug: "Num24"
date: 2025-04-21 10:00:00 +0800
permalink: /leetcode-75/Num24/
---

# Num. 24 - Removing Stars From a String


<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
You are given a string `s`, which contains stars `*`.

In one operation, you can:

● Choose a star in `s`.  
● Remove the closest **non-star** character to its **left**, as well as remove the star itself.

Return *the string after **all** stars have been removed*.

**Note:**

● The input will be generated such that the operation is always possible.  
● It can be shown that the resulting string will always be unique.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: s = "leet**cod*e"  
Output: "lecoe"  
Explanation: Performing the removals from left to right:  
● The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".  
● The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".  
● The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".  
There are no more stars, so we return "lecoe".
#### Example 2:
Input: s = "erase*****"  
Output: ""  
Explanation: The entire string is removed, so we return an empty string.  
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var removeStars = function(s) {
    for(let i = 0; i < s.length; i++) {
      if(s[i] === '*') {
        s.slice(0, i-1) + s.slice(i+1, s.length)
      }
    }
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var removeStars = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '*') {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('');
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、栈（Stack）约等于数组**

- **栈的含义：**

    - 栈其实就是一个 **有特殊操作规则的数组**。

    - 是一种 **后进先出（LIFO）**的数据结构。

    - 在 JavaScript 中，**直接用数组 `[]`** 就可以实现栈的功能。

- **常用方法：**

    - `stack.push(x)` → 入栈（加到末尾）

    - `stack.pop()` → 出栈（移除末尾）

### **二、哈希表（Hash Table）**

- `Map` 是**键值对结构**，适合**记录频率**、**建立映射**。

    - 示例：`map.set('a', 2)` 表示字符 `'a'` 出现了 2 次。

- `Set` 是**唯一值集合**，适合**去重**、**快速查找是否存在**。

    - 示例：`set.has('a')` 判断 `'a'` 是否出现过。

### **三、适用总结**：

<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| 场景 | 推荐结构 | 举例 |
| --- | --- | --- |
| 一边删一边加，顺序很重要 | 栈（数组模拟） | 删除前一个字符（如 `removeStars`） |
| 记录谁出现了几次 | `Map` | `{"a": 2, "b": 3}` |
| 判断有没有出现过 | `Set` | `{"a", "b", "c"}` |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

{% include hr_write_word.html text="END" %}
