---
layout: default
title: "Num. 16 - Max Consecutive Ones III"
slug: "Num16"
date: 2025-04-16 10:00:00 +0800
permalink: /leetcode-75/Num16/
---

# Num. 16 - Max Consecutive Ones III

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2  
Output: 6  
Explanation: [1,1,1,0,0,1,1,1,1,1,1]  
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
#### Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3  
Output: 10  
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]  
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var longestOnes = function(nums, k) {
    let left = 0;
    let right = nums.length;
    let length;
    let maxLength = 0;
    while(left < right){
        for (let i = left; i < nums.length; i++) {
            if(nums[i] === 0){
                k--;
                console.log(i);
                console.log(k)
                if(k === 0) {
                    length = i - left + 1;
                    maxLength = Math.max(maxLength, length);
                }
            }
        }
        left++
    }
    return maxLength
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var longestOnes = function(nums, k) {
    let maxLen = 0;
    let left = 0;

    for(let right = 0; right < nums.length; right++) {
        if(nums[right] === 0) {
            k--
        }

        // 开始滑动窗口
        while(k < 0) {
            if(nums[left] === 0) {
                k++
            }
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};
</code></pre>

![image]({{ "/assets/images/leetcode/Max-Consecutive-Ones-III.png" | relative_url }})



{% include hr_write_word.html text="相关知识整理与扩展" %}

### 一、双指针实现的滑动窗口模板总结

1. **滑动窗口：**

    - 维护一个 `[left, right]` 区间，窗口内**最多允许**存在 `k` 个不符合条件的元素

2. **双指针：**

    - `left` 和 `right` 同向移动，配合控制窗口的合法性（不超过 k 个不合法元素）

3. **一句话总结：**

    - 使用两个指针构建滑动窗口，遇到不合法元素就消耗一次 `k--`

    - 当 `k < 0` 时，说明犯错次数已用完，需要通过移动 `left` 来收回一个不合法元素（`k++`）

    - 每次窗口合法时，更新最大长度为 `right - left + 1`

4. **适用场景：**

    - 最多翻转 k 个 0，使连续 1 最长

    - 最多替换 k 次，使子串变成同一字符

    - 最多包含 k 个不同字符的最长子串等

5. **注意事项：**

    - 不需要判断合法元素（如 `nums[right] === 1`），只处理会消耗 k 的不合法情况

    - 窗口合法时再更新 `maxLen = right - left + 1`

    - 当 `k < 0` 时必须缩小窗口，同时恢复 `k++` 以保持窗口合法

6. **关键词识别（判断是否适合该模板）：**

    - 出现最多翻转 / 删除 / 替换 k 个字符（元素）

    - 问题要求 连续子数组/子串最长/最短满足某条件
    
    - 题目强调 **容错 k 次** 或 **允许 k 个例外**



{% include hr_write_word.html text="END" %}