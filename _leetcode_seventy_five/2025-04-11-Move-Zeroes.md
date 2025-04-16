---
layout: default
title: "Num. 10 - Move Zeroes"
slug: "Num10"
date: 2025-04-11 10:00:00 +0800
permalink: /leetcode-75/Num10/
---

# Num. 10 - Move Zeroes

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: nums = [0,1,0,3,12]  
Output: [1,3,12,0,0]
#### Example 2:
Input: nums = [0]  
Output: [0]
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var moveZeroes = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            count += 1;
            let left = nums.slice(0, i);
            let right = nums.slice(i+1, nums.length);
            nums.splice();
        }
    }
    for(let i = 1 ; i <= count; i++){
        nums.push(0);
    }
    return nums
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var moveZeroes = function(nums) {
    let count = 0;
    for(let i = nums.length-1; i >= 0 ; i--){
        if(nums[i] === 0){
            nums.splice(i, 1);
            count ++;
        }
    }
    while(count--){
        nums.push(0)
    }
    return nums
};
</code></pre>
<pre><code class="language-js">
// 更推荐
var moveZeroes = function(nums) {
    let updateIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[updateIndex++] = nums[i]
        }
    }

    while(updateIndex < nums.length){
        nums[updateIndex++] = 0
    }

    return nums
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、JavaScript 中的假值（Falsy Values）**
- 以下值在 `if` 条件判断中会被视为 `false`：

<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| --- | --- | --- | --- | --- | --- |
| `false` | `0` | `''`（空字符串） | `null` | `undefined` | `NaN` |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

    

### **二、本题不使用 `splice()` 的原因**

- `splice()` 会 **改变数组长度**，导致循环错位或漏处理元素

- 在要求 **原地修改（in-place）** 且不创建新数组的题目中：

    - 不要使用：`splice()`、`filter()`、`map()` 等方法

    - 推荐使用：`arr[index] = value`

- **常见不推荐方式对比表：**
    
<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| 方法 | 存在的问题 |
| --- | --- |
| `splice(i, 1)` | 改变数组长度，可能导致元素跳过或错位 |
| `slice()` | 返回新数组，**不满足 in-place 要求** |
| `filter()` / `map()` | 都会返回新数组，**不是原地修改** |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


### **三、为什么推荐 `arr[index] = value`**

1. 不改变数组长度

2. 原地修改，符合 in-place 要求

3. 性能更优，不创建新数组，也不会引发内存重新分配

4. 常用于双指针类题目（如 `moveZeroes`、`removeElement`）

{% include hr_write_word.html text="END" %}