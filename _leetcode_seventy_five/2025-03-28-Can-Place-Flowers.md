---
layout: default
title: "DAY3 - Can Place Flowers"
slug: "Day3_1"
date: 2025-03-28 10:00:00 +0800
permalink: /leetcode-75/Day3_1/
---

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


## **Did it myself**
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

<h2><strong>Get it from the comments section</strong></h2>
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