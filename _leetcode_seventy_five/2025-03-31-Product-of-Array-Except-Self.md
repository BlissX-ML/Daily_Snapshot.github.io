---
layout: default
title: "DAY4 - Product of Array Except Self"
slug: "Day4_2"
date: 2025-03-31 11:00:00 +0800
permalink: /leetcode-75/Day4_2/
---

# DAY 4 - Product of Array Except Self

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: nums = [1,2,3,4]  
Output: [24,12,8,6]
#### Example 2:
Input: nums = [-1,1,0,-3,3]  
Output: [0,0,9,0,0]
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var productExceptSelf = function(nums) {
    let result = [];
    let sum = 0;
    for(let i=0; i < .length; i++){
        sum += nums[i];
    }
    for(let j=0; j < nums.length; j++){
        let currentNum = sum - nums[j];
        result.push(currentNum.toFixed(32));
    }
    return result
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var productExceptSelf = function(nums) {
    let result = [];

    // 第一步：计算每个位置左侧所有元素的乘积
    // 我们从左向右遍历 nums，用变量 left 来累积左边所有数的乘积。
    // 初始值设为 1，因为乘积的初始单位是 1（乘以 1 不影响结果）。
    // 举例：对于 nums[1] 来说，它左边只有 nums[0]，所以 result[1] = nums[0]。
    // 对于 nums[0]，它左边没有数，因此 result[0] = 1。
    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = left;           // 先存当前 left，即不包含 nums[i] 本身
        left = left * nums[i];      // 然后更新 left，加上当前 nums[i] 值
    }

    // 第二步：计算右侧所有元素的乘积，并乘到已有的左乘积上
    // 从右向左遍历 nums，用变量 right 累积右边所有数的乘积。
    // 同样初始为 1，表示最右边没有任何元素时的乘积。
    // 每一步将 result[i]（即左侧乘积）乘以当前 right（右侧乘积），得到最终结果。
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * right;  // 将右侧乘积乘进来
        right = right * nums[i];       // 再更新右乘积
    }

    return result;
};
</code></pre>
![image]({{ "/assets/images/leetcode/Product-of-Array-Except-Self.png" | relative_url }})

{% include hr_write_word.html text="END" %}