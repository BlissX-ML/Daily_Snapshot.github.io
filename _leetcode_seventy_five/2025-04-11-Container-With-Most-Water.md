---
layout: default
title: "DAY 5 - Container With Most Water"
slug: "Day5_5"
date: 2025-04-11 12:00:00 +0800
permalink: /leetcode-75/Day5_5/
---

# DAY 5 - Container With Most Water

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.

**Notice** that you may not slant the container.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
![image]({{ "/assets/images/leetcode/Container-With-Most-Water-EXAMPLE.jpg" | relative_url }})  
Input: height = [1,8,6,2,5,4,8,3,7]  
Output: 49  
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
#### Example 2:
Input: height = [1,1]  
Output: 1
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var maxArea = function(height) {
    // 先找到最大值和第二大的值
    let temp = height;
    temp.sort();
    let maxHeight = Math.max(...temp);  
    let secondHeight = 0, a = 0;
    for(let i = 0; i < temp.length; i++){
        if(temp[i] > a && temp[i] < maxHeight){
            a = temp[i]
            secondHeight = a
        }
    }

    // 双指针分别从两侧寻找最大值和第二大的值
    let left = 0, right = 0;
    let currentHeight;
    let leftHeight = 0;
    let rightHeight = height.length-1;
    while(leftHeight < rightHeight){
        if(height[leftHeight] === maxHeight || height[leftHeight] === secondHeight){
            left = leftHeight;
            if(height[leftHeight] === secondHeight){
                currentHeight = secondHeight
            }
        } 
        if(height[rightHeight] === maxHeight || height[rightHeight] === secondHeight){
            right = rightHeight;
            if(height[rightHeight] === secondHeight){
                currentHeight = secondHeight
            }
        }
    leftHeight++;
    rightHeight--
    }

    // 计算结果
    let space = right - left;
    return space * currentHeight
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxSpace = 0;

    while(left < right){
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        maxSpace = Math.max(maxSpace, h*w)

        // 每次计算后，总是移动高度较小的那一侧，以期望寻找更高的柱子。
        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }

    return maxSpace
};
</code></pre>

{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、左右夹逼法（对撞双指针）通用模型总结**

1. **适用场景：**单个数组中寻找两端的某种组合，使得「某个量最大或最小」，常用于距离 × 条件值最大化的问题。

2. **解题思路：**

    - 定义两个指针 `left` 和 `right`，分别指向数组两端

    - 每次根据当前组合计算结果（如面积、差值等）

    - 用条件更新最优解

    - 然后**移动较劣势的一侧**（通常是较小值的一边），期望找到更优解

    - 指针不断收缩直到相遇

3. **常见题型举例：**

    - 盛最多水的容器

    - 有序数组两数之和

    - 最接近的三数之和

    - 找最大/最小差距的问题

    - 排好序的数组中滑动窗口/对撞指针类问题

4. **判断口诀：**

    - 两头夹，两头比，短的先动试试力

    - 比的是高、和、差，只要是**两个点构成结果**，基本都能尝试用夹逼法优化。


{% include hr_write_word.html text="END" %}

















