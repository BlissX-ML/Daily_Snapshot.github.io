---
layout: default
title: "Num. 13 - Max Number of K-Sum Pairs"
slug: "Num13"
date: 2025-04-11 13:00:00 +0800
permalink: /leetcode-75/Num13/
---

# Num. 13 - Max Number of K-Sum Pairs

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
You are given an integer array `nums` and an integer `k`.

In one operation, you can pick two numbers from the array whose sum equals `k` and remove them from the array.

Return *the maximum number of operations you can perform on the array*.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: nums = [1,2,3,4], k = 5  
Output: 2  
Explanation: Starting with nums = [1,2,3,4]:  
• Remove numbers 1 and 4, then nums = [2,3]  
• Remove numbers 2 and 3, then nums = []  
There are no more pairs that sum up to 5, hence a total of 2 operations.
#### Example 2:
Input: nums = [3,1,3,4,3], k = 6  
Output: 1  
Explanation: Starting with nums = [3,1,3,4,3]:  
• Remove the first two 3's, then nums = [1,4,3]  
There are no more pairs that sum up to 6, hence a total of 1 operation.
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var maxOperations = function(nums, k) {
    let count = 0;

    // 删除掉重复的元素
    let leftCancel = 0;
    let rightCancel = nums.length-1;
    while(leftCancel < rightCancel){
        if(nums[leftCancel] === nums[rightCancel]){
            nums.splice(leftCancel, 1);
            left++
            rightCancel = nums.length-1;  // 更新长度
        } else{
            leftCancel++;
            rightCancel--;
        }
    }

    // 左右夹逼法（应该是这个）
    let left = 0;
    let right = nums.length-1;
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum === 5){
            count++;
        } else {
            left++
        }
    }
    return count
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var maxOperations = function(nums, k) {
    // 先排序
    nums.sort((a, b) => a - b);

    // 开始双指针对比计算
    let left = 0;
    let right = nums.length-1;
    let count = 0;
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum === k){
            count++;
            left++;
            right--;
        } else if(sum < k) {
            left++
        } else {
            right--
        }
    }
    return count;
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、JavaScript 中的排序方法**

1. **基本语法：**`nums.sort();`

    - 默认按照字符串的字典序进行排序

    - 特殊情况：`[3, 12, 1, 10].sort()  // 结果是 [1, 10, 12, 3], 而非[1, 3, 10, 12]`

2. **进阶语法：**传入比较函数，如 `(a, b) => a - b`

    - 数值从小到大排序：`nums.sort((a, b) => a - b);`

        - 如果结果为负值（a < b），a 排在前面

        - 如果为正值（a > b），b 排在前面

        - 如果为 0，顺序不变

    - 数值从大到小排序：`nums.sort((a, b) => b - a);`

### **二、先排序 + 对撞指针（经典夹逼法）**

1. **问题描述**

    - 给定一个已排序（或需先排序）的数组 `nums` 和一个目标和 `k`

    - 找出所有满足 `nums[i] + nums[j] == k` 的数对（`i < j`），或统计最多可配对的次数

2. **适用条件**

    - 数组已排序，或可以先排序（`O(nlogn)`）

    - 问题目标是找两个数的和是否为某个固定值（或次数、组合等）

    - 不要求保留原始顺序，允许打乱顺序进行处理
    
### **三、哈希解法**

```jsx
var maxOperations = function(nums, k) {
    let times = 0;        // 配对成功的次数
    const map = {};       // 用来存储每个数字出现的次数（频率）

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];        // 当前遍历的数字
        const diff = k - item;       // 需要的配对数字

        // 如果差值已经在 map 中存在，说明可以配对成功
        if (map[diff]) {
            map[diff]--;             // 消耗掉这一个配对值
            times++;                 // 配对成功 +1
        } else {
            // // 否则将当前值加入哈希表中，记录其出现次数，等待后续匹配
            if (!map[item]) {
                map[item] = 0;  // 若 map 中不存在该值，则先初始化这个键的值为 0
            }
            map[item]++;  // 再加 1，变成频率记录
        }
    }

    return times;  // 返回总配对次数
};
```
- **模拟执行过程：**`nums = [3, 1, 2], k = 5`

    1. `3` 没有配对项：存进 map：`map[3] = 1`

    2. `1` 没有配对项：存进 map：`map[1] = 1`

    3. `2` 可以和 `3` 配对（因为 `map[3] = 1` ）：配对成功一次，则 `map[3]-- → 0`，`times++`

### **四、排序 + 双指针与哈希表法的对比**

- **排序 + 双指针**：先排好序，两头往中间走。通过双指针从两侧向中间移动，逐步查找符合条件的数对。

- **哈希表法**：有需要配对的先放进 map，下次遇到刚好配得上的，则从 map 中取出对应配对值，完成一次匹配。

### **五、.map() 和 .forEach() 的区别**

<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 对比点 | `.map()` | `.forEach()` |
| --- | --- | --- |
| 返回值 | ✅ **返回一个新数组** | **没有返回值（undefined）** |
| 用途 | 用来对每个元素做变换，并形成新数组 | 用来对每个元素做操作（如打印、累加） |
| 是否链式调用 | ✅ 可以 `.map().filter().reduce()` 等 | 一般用于副作用操作 |
| 修改原数组 | ❌ 不修改原数组 | ❌ 不修改原数组 |
| 示例：`arr = [1, 2, 3]` | `arr.map(x => x * 2);  // [2, 4, 6]` | `arr.forEach(x => console.log(x)); // 输出 1, 2, 3` |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

### **六、介绍 map 和 .map() 的区别**

1. **`map`（对象/哈希表）**

    - **作用**：存储 **键-值** 结构，常用于快速查找、统计频率

    - **语法：**`const map = {};  map[3] = 2;  // 设置键值对：3 对应出现了 2 次`

2. **`.map()`（数组原型方法）**

    - **作用**：对数组中每一项做某种操作，**返回一个新数组**。

    - **语法：**`arr.map(x => x * 2);`


{% include hr_write_word.html text="END" %}