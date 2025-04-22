---
layout: default
title: "Num. 25 - Asteroid Collision"
slug: "Num25"
date: 2025-04-21 11:00:00 +0800
permalink: /leetcode-75/Num25/
---

# Num. 25 - Asteroid Collision

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
We are given an array `asteroids` of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: asteroids = [5,10,-5]  
Output: [5,10]  
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
#### Example 2:
Input: asteroids = [8,-8]  
Output: []  
Explanation: The 8 and -8 collide exploding each other.
#### Example 3:
Input: asteroids = [10,2,-5]  
Output: [10]  
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var asteroidCollision = function(asteroids) {
    let left = 0;
    let right;
    for(let i = 0; i < asteroids.length; i++) {
        if(asteroids[i] < 0) {
            right = i;
            let minus = asteroids[i] * (-1);
            let leftValue = asteroids[i-1];
            if(minus < leftValue) {
                asteroids.pop()
            } else{
                asteroids.pop().pop().push(s[i])
            }
        }
    }
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var asteroidCollision = function(asteroids) {
    let stack = [];

    // 开始遍历元素
    for(let asteroid of asteroids) {
        let crack = false;

        while(stack.length !== 0 && stack[stack.length-1] > 0 && asteroid < 0) {
            if(stack[stack.length-1] > -asteroid) {
                crack = true;
                break;
           } else if(stack[stack.length-1] === -asteroid) {
                stack.pop();
                crack = true;
                break;
           } else {
                stack.pop();
           }
        }

        // 如果没有碰撞就保存进栈（需先经过循环条件分析）
        if(!crack) {
            stack.push(asteroid);
        }
    }

    return stack;
};
</code></pre>

![image]({{ "/assets/images/leetcode/Asteroid-Collision.png" | relative_url }})

{% include hr_write_word.html text="相关知识整理与扩展" %}



### **一、栈模拟「行星碰撞」逻辑总结（精简版）**

- **while 循环**：判断是否需要持续对比 —— 当前元素为负数，且栈顶为正数 ⇒ 方向相撞，触发碰撞过程

- **crack 标志**：

    - 初始为 `false`，表示当前负数**默认不会被撞碎**

    - 若在碰撞中被某个正数撞碎，则置为 `true`，**本轮跳出、不入栈**

- **break 用法**：一旦确定当前负数已败（被撞碎或平局同归于尽），立刻终止当前对撞循环，开始遍历下一个元素

- **入栈条件**：只有当当前负数击败所有栈中对手（即 crack 保持为 false）时，才能入栈


{% include hr_write_word.html text="END" %}