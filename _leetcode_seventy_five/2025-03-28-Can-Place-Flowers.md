---
layout: default
title: "DAY 3 - Can Place Flowers"
slug: "Day3_1"
date: 2025-03-28 10:00:00 +0800
permalink: /leetcode-75/Day3_1/
---

# DAY 3 - Can Place Flowers
<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` *if* `n` *new flowers can be planted in the* `flowerbed` *without violating the no-adjacent-flowers rule and* `false` *otherwise*.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1  
Output: true
#### Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2  
Output: false
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var canPlaceFlowers = function(flowerbed, n) {
    let length = flowerbed.length;
    console.log(length)
    let maxPlaceFlowers;
    if(length % 2 === 1 && flowerbed[0] === 1) {
        maxPlaceFlowers = Math.ceil(length / 2);
    } else if (length % 2 === 1 && flowerbed[0] !== 1) {
        maxPlaceFlowers = Math.floor(length / 2);
    } else if(length % 2 === 0 ){
        maxPlaceFlowers = length / 2;
    }
    console.log(maxPlaceFlowers)
    let count =0;
    for(var i = 0; i < length; i++){
        if(flowerbed[i] === 1) {
        count += 1;
        }
    }
    console.log(count)

    return (maxPlaceFlowers - count >= n)
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var canPlaceFlowers = function(flowerbed, n) {
  // 遍历整个数组
  for(var i=0; i < flowerbed.length; i++) {

    // 确认当前位置的左侧是空地
    // if(i === 0 || flowerbed[i-1] === 0) { leftPosition = true;}不可用，存在未赋值情况
    let placeEmptyLeft = ((i===0) || flowerbed[i - 1] === 0);
    
    // 确认当前位置的右侧是空地
    let placeEmptyRight = ((i === flowerbed.length-1) || flowerbed[i + 1] === 0);

    //只有当当前位置在0与0之间的情况下，这里才是可以种植的
    if(flowerbed[i] === 0 && placeEmptyLeft && placeEmptyRight) {
        flowerbed[i] = 1;  // 种花
        n--;   
    }
    if(n <= 0) return true;
  }
  return false;
};
</code></pre>
![image]({{ "/assets/images/leetcode/Can-Place-Flowers.png" | relative_url }})

<pre><code class="language-js">
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const prev = i === 0? 0 : flowerbed[i - 1];
            const next = i === flowerbed.length - 1? 0 : flowerbed[i + 1];
            if (prev === 0 && next === 0) {
                flowerbed[i] = 1;
                count++;
                if (count >= n) {
                    return true
                }
            }
        }
    }
    return count >= n
};
</code></pre>

{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、向上取整与向下取整的数学方法**

- **`Math.ceil()`**

    - 用于向上取整，返回大于等于给定数字的最小整数。

    - **语法：`Math.ceil(x)`**

    - 示例：`console.log(Math.ceil(-4.2));  // 输出：-4`

- **`Math.floor()`**

    - 用于向下取整，返回小于等于给定数字的最大整数。

    - **语法：`Math.floor(x)`**

    - 示例：`console.log(Math.floor(4.8)); // 输出：4`

- **区别：**
<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 方法 | 作用 | 示例（输入：4.7） | 示例（输入：-4.7） |
| --- | --- | --- | --- |
| `Math.ceil()` | 向上取整 | 5 | -4 |
| `Math.floor()` | 向下取整 | 4 | -5 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

### 二、种花问题解题思路

1. **遍历数组**：检查每一个 `0` 的位置

2. **判断左右空位**：使用 `placeEmptyLeft` 和 `placeEmptyRight` 来检测左右两侧是否为空

3. **种花与修改数组**：符合条件的地方修改为 `1` 并 `n--`

4. **提前返回 `true`**：一旦 `n <= 0`，立即返回 `true`

5. **返回 `false`**：遍历完成后仍然不能满足条件，则返回 `false`

{% include hr_write_word.html text="END" %}
