---
layout: default
title: "Num. 14 - Maximum Average Subarray I"
slug: "Num14"
date: 2025-04-15 09:00:00 +0800
permalink: /leetcode-75/Num14/
---

# Num. 14 - Maximum Average Subarray I

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose **length is equal to** `k` that has the maximum average value and return *this value*. Any answer with a calculation error less than `10-5` will be accepted.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4  
Output: 12.75000  
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
#### Example 2:
Input: nums = [5], k = 1  
Output: 5.00000
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var findMaxAverage = function(nums, k) {
    let length = nums.length;
    let average = -Infinity;
    let times = length - k;  // 索引最大到这个位置

    for(let i = 0; i <= times; i++) {
        let value = 0;
        let testArr = nums.slice(i, i+k);
        let currentAverage = (arr) => {
            for(let m of arr){
                value += m;
            }
            return value;
        }
        let currentValue = currentAverage(testArr) / k
        average = Math.max(average, currentValue)
    }
    return average;
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var findMaxAverage = function(nums, k) {
    let sum = 0;

    for(let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let maxSum =  sum;

    for(let i = k; i < nums.length; i++){
        sum = sum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum/k
};
</code></pre>

![image]({{ "/assets/images/leetcode/Maximum-Average-Subarray-I.png" | relative_url }})


{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、JavaScript 滑动窗口 VS 暴力解法：最大平均值问题对比总结**

1. **暴力解法（我的方法）**

    - **优点：**

        - 核心思路正确：确实是固定窗口大小 `k`，找最大平均值

        - 写法直观，结构清晰：切片 + 平均值计算分开

    - **缺点：**

        - `slice()` 每次都复制子数组，空间复杂度 O(k)

        - `for` 遍历求和，时间复杂度 O(k)

        - 总体复杂度 O(n * k)，在大数据量时容易超时（TLE）

2. **推荐方法：滑动窗口优化**

    - **优点：**

        - 时间复杂度 O(n)：每个元素只访问一次

        - 空间复杂度 O(1)：不新建数组、不保留窗口内容

        - 每轮仅更新一个元素（减一个旧的，加一个新的）

        - 性能更强

3. **一句话总结**

    - **暴力法** 思路清晰但效率低；

    - **滑动窗口** 是经典优化思路，用一次加减更新窗口，能高效应对子数组问题。

4. **为什么更推荐滑动方法？**
<div style="margin-left: 1.5em; ">
{% capture tableIndent %}
| 对比项 | 暴力法（你的方式） | 滑动窗口优化法 |
| --- | --- | --- |
| &nbsp;&nbsp;是否新建数组&nbsp;&nbsp; | 每次 `slice()` | 无需新数组 |
| 是否重复求和 | &nbsp;&nbsp;&nbsp;每次 `for` 遍历求和&nbsp;&nbsp;&nbsp; | 只更新一个值 |
| 时间复杂度 | O(n * k) | O(n) |
| 空间复杂度 | O(k) | O(1) |
| 是否容易超时 | 是 | 否 |
| 是否适合面试 | ❌ 不推荐 | &nbsp;&nbsp;✅ 推荐优先掌握&nbsp;&nbsp; |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>



{% include hr_write_word.html text="END" %}