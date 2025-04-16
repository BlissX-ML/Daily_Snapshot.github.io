---
layout: default
title: "Num. 19 - Find Pivot Index"
slug: "Num19"
date: 2025-04-16 13:00:00 +0800
permalink: /leetcode-75/Num19/
---

# Num. 19 - Find Pivot Index

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given an array of integers `nums`, calculate the **pivot index** of this array.

The **pivot index** is the index where the sum of all the numbers **strictly** to the left of the index is equal to the sum of all the numbers **strictly** to the index's right.

If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the left. This also applies to the right edge of the array.

Return *the **leftmost pivot index***. If no such index exists, return `-1`.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: nums = [1,7,3,6,5,6]  
Output: 3  
Explanation:  
The pivot index is 3.  
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11  
Right sum = nums[4] + nums[5] = 5 + 6 = 11
#### Example 2:
Input: nums = [1,2,3]  
Output: -1  
Explanation:  
There is no index that satisfies the conditions in the problem statement.
#### Example 3:
Input: nums = [2,1,-1]  
Output: 0  
Explanation:  
The pivot index is 0.  
Left sum = 0 (no elements to the left of index 0)  
Right sum = nums[1] + nums[2] = 1 + -1 = 0
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var pivotIndex = function(nums) {
    let centerIndex = Math.ceil(nums.length / 2)
    let left = 0;
    let right = nums.length - 1;
    let leftSum = 0;
    let rightSum = 0;
    while(left < right) {
        leftSum += nums[left];
        rightSum += nums[right];
        if(leftSum !== rightSum ) {
            if(right - left === 1){
                return -1;
            }
            left++;
            right--; 

        } else if{

        }
    }
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var pivotIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(leftSum === total - leftSum - nums[i]){
            return i;
        }
        leftSum += nums[i];
    }
    return -1
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、reduce 方法**

- **`.reduce()` 方法：**JavaScript 中数组的 **累加方法**

    - **作用：** 把数组中所有元素「归并」成一个值，比如求和、求乘积

    - **语法：**`array.reduce((累计值, 当前值) => 处理逻辑, 初始值)`

    - `nums.reduce((a, b) => a + b, 0);` 代表 从 0 开始，把 `nums` 中所有元素加起来，得到 `total`

### **二、前缀和**

- **前缀和** 是一种算法技巧，常用于快速求一段区间内的和。

- **定义：**

    - 给定数组 `nums = [a0, a1, a2, ..., an]`

    - 它的前缀和数组 `preSum` 是：`preSum[0] = 0; preSum[1] = a0; preSum[2] = a0 + a1; …`

- **优点：**一旦前缀和算好，就能 **O(1)** 时间快速求出任意区间和

{% include hr_write_word.html text="END" %}