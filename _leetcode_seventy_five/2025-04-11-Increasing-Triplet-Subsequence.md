---
layout: default
title: "Num. 08 - Increasing Triplet Subsequence"
slug: "Num08"
date: 2025-04-11 08:00:00 +0800
permalink: /leetcode-75/Num08/
---

# Num. 08 - Increasing Triplet Subsequence
<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given an integer array `nums`, return `true` *if there exists a triple of indices* `(i, j, k)` *such that* `i < j < k`  *and*  `nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: nums = [1,2,3,4,5]  
Output: true
Explanation: Any triplet where i < j < k is valid.
#### Example 2:
Input: nums = [5,4,3,2,1]  
Output: false  
Explanation: No triplet exists.
#### Example 3:
Input: nums = [2,1,5,0,4,6]  
Output: true  
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var increasingTriplet = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let a = nums[i];
        let b = nums[i+1];
        let c = nums[i+2];
        if(a < b && b < c) {
            return true
        }
    }
    return false;
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let n of nums) {
        if (n <= first) {
            first = n;
        } else if (n <= second) {
            second = n;
        } else {
            // n > second > first，说明有三元递增子序列
            return true;
        }
    }
    
    return false;
};
</code></pre>

![image]({{ "/assets/images/leetcode/Increasing-Triplet-Subsequence.png" | relative_url }})

{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、for 遍历方式对比**

<div style="margin-left:0em;">
{% capture tableIndent %}
| 写法 | `for (let i = 0; i < nums.length; i++)` | `for (let n of nums)` |
| --- | --- | --- |
| 说明 | 使用索引 `i`，通过 `nums[i]` 获取值 | 直接获取数组中的每一个值 |
| 推荐使用场景 | 需要索引或修改原数组时使用 | 只需要读取值、不关心索引时使用 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

### **二、定义变量为 Infinity 有什么用处？**

- 用于初始化一个**绝对不会是最小**的值，作为最初状态，确保后续任意数都可以更新它。

- 语法：`let first = Infinity;`

- **为什么要这样做？**

    - 遍历前我们还不知道最小值，所以设为最大。

    - 遇到任何实际数值（如 5、3、1）都会比 `Infinity` 小。

    - 所以第一次循环就可以更新出真正的最小值。

- **应用场景：**常见于贪心、最小值查找等场景。

### **三、贪心算法策略：**

- **算法流程：**只保留两个变量 `first` 和 `second`

    - `first` 记录当前看到的最小值

    - `second` 记录比 `first` 大，但目前为止最小的那个值

- **每次遍历都贪心更新这两个变量**

- 一旦出现某个数 `n` 满足：`n > second`，说明找到了 third

- 不回头、不尝试所有组合，只走当前“最有希望成功”的路径 —— 这就是贪心。

{% include hr_write_word.html text="END" %}