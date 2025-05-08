---
layout: default
title: "Num. 18 - Find the Highest Altitude"
slug: "Num18"
date: 2025-04-16 12:00:00 +0800
permalink: /leetcode-75/Num18/
---

# Num. 18 - Find the Highest Altitude

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
There is a biker going on a road trip. The road trip consists of `n + 1` points at different altitudes. The biker starts his trip on point `0` with altitude equal `0`.

You are given an integer array `gain` of length `n` where `gain[i]` is the **net gain in altitude** between points `i` and `i + 1` for all `(0 <= i < n)`. Return *the **highest altitude** of a point.*
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: gain = [-5,1,5,0,-7]  
Output: 1  
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
#### Example 2:
Input: gain = [-4,-3,-2,-1,4,3,2]  
Output: 0  
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x2B55;
<pre><code class="language-js">
var largestAltitude = function(gain) {
    let altitudes = [0];
    let sum = 0;
    for(let i = 0; i < gain.length; i++) {
        sum += gain[i];
        altitudes[i+1] = sum;
    }
    return Math.max(...altitudes)
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var largestAltitude = function(gain) {
    let max = 0, sum = 0;
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i];
        max = Math.max(max, sum);
    }
    return max;
};
</code></pre>


{% include hr_write_word.html text="END" %}