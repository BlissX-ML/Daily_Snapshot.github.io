---
layout: default
title: "DAY2 - Kids With the Greatest Number of Candies"
slug: "Day2_2"
date: 2025-03-27 10:00:00 +0800
permalink: /leetcode-75/Day2_2/
---

# DAY 2 - Kids With the Greatest Number of Candies

<aside class="asideDiv">
    <!-- 图标 -->
    <div>
        👉
    </div>
    <!-- 题目介绍 -->
    <div>
        <!-- 文字介绍部分 -->
        <main>
            <p style="margin: 0;">
            There are <code>n</code> kids with candies. You are given an integer array <code>candies</code>, where each <code>candies[i]</code> represents the number of candies the <code>ith</code> kid has, and an integer <code>extraCandies</code>, denoting the number of extra candies that you have.
            </p>
            <p>
            Return a boolean array <code>result</code> of length <code>n</code>, where <code>result[i]</code> is <code>true</code> if, after giving the <code>ith</code> kid all the <code>extraCandies</code>, they will have the <b>greatest</b> number of candies among all the kids, or <code>false</code> otherwise.
            </p>
            <p>
            Note that <b>multiple</b> kids can have the <b>greatest</b> number of candies.
            </p>
        </main>
        <!-- 示例部分 -->
        <main>
            <h3>Example 1:</h3>
            <p class="quoteLeetcode">
            Input: candies = [2,3,5,1,3], extraCandies = 3
            Output: [true,true,true,false,true]
            Explanation: If you give all extraCandies to:
            - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
            - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
            - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
            - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
            - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
            </p>
            <h3>Example 2:</h3>
            <p class="quoteLeetcode">
            Input: candies = [4,2,1,1,2], extraCandies = 1
            Output: [true,false,false,false,false]
            Explanation: There is only 1 extra candy.
            Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
            </p>
            <h3>Example 3:</h3>
            <p class="quoteLeetcode">
            Input: candies = [12,1,12], extraCandies = 10
            Output: [true,false,true]
            </p>
        </main>
    </div>
</aside>

<h2><strong>Did it myself.</strong></h2>
<pre><code class="language-js">
var kidsWithCandies = function(candies, extraCandies) {
    var temp, result = [];
    for(var i=0; i < candies.length; i++){
        const newNumber = candies[i] + extraCandies;
        console.log(newNumber)
        for(var j=0; j < candies.length; j++){
            if(newNumber >= candies[j]){
                temp = true
            } else {
                temp = false
            }
        }
        console.log(temp);
        result[i] = temp;
    }
    return result;
};
</code></pre>

<h2><strong>Get it from ChatGPT.</strong></h2>
<pre><code class="language-js">
var kidsWithCandies = function(candies, extraCandies) {
    var maxCandies = Math.max(...candies);
    var result = [];
    for(var i=0; i < candies.length; i++){
        result.push(candies[i] + extraCandies >= maxCandies)
    }
    return result;
};
</code></pre>

<h2><strong>Get it from the comments section.</strong></h2>
<pre><code class="language-js">
var kidsWithCandies = function(candies, extraCandies) {
    let max_candy = Math.max(...candies)
    let result = candies.map((item)=>(item + extraCandies) >= max_candy)
    return result
};
</code></pre>


---

## 一、`...candies` 的用处与基本语法

- **展开运算符 (Spread Operator)：**
    - 在 JavaScript 中，`...` 用于展开可迭代对象（如数组、字符串、对象）为单独的元素。
    - 可以用于 **数组或对象的展开、复制、合并等操作**。
    - `Math.max(...candies)` 用于 **将数组转化为一个个独立的参数传递给 `Math.max` 函数**。
    - 本质上是：`Math.max(2,3,5,1,3)`。
- **基本语法：**
    
    <pre><code class="language-js">
const array = [2, 3, 5, 1, 3];
const maxValue = Math.max(...array);  // 输出：5
    </code></pre>
    
- **与 `.map()` 的对比：**
    - `.map()` 是用于遍历数组并生成一个新的数组，每次遍历都会执行传入的函数。
    - `Math.max(...array)` 是将数组转化为一个个单独的参数传入函数，而非对每个元素进行操作
    
    <pre><code class="language-js">
const array = [2, 3, 5, 1, 3];
const updateArray = array.map(item => (item >=4) ? true : false);
console.log(updateArray);  // 输出：[false, false, true, false, false]
    </code></pre>
    
- **常见用法：**
    - **数组合并：**
        
        <pre><code class="language-js">
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];  // [1, 2, 3, 4]
        </code></pre>    
    - **数组复制：**
        <pre><code class="language-js">
        const original = [5, 6, 7];
        const copy = [...original];  // [5, 6, 7]
        </code></pre>
        

---

## 二、贪心算法的解题思路与常用方法

- **贪心算法的定义：**
    - 贪心算法是一种 **在每一步选择中都采取当前最优解** 的算法。
    - 最终希望通过一系列的局部最优选择，得到全局最优解。
- **适用场景：**
    - 当问题可以分解成 **独立的子问题**，且每个子问题的最优解可以直接影响整体的最优解。
    - 通常用于：
        - 最小生成树（Kruskal、Prim 算法）
        - 单源最短路径问题（Dijkstra 算法）
        - 活动选择问题（区间调度）
        - 背包问题（部分背包问题）
- **贪心算法的常用方法：**
    - **找到适用的贪心选择规则：**
        - 每次选择的标准是什么？
        - 在这个题目中，找出所有孩子中糖果最多的数量 `maxCandies`。
    - **验证局部最优能否构成全局最优：**
        - **每次的选择是否影响最终的答案。**
        - 判断每个孩子的糖果数 `+ extraCandies` 是否大于等于 `maxCandies`。
    - **实现：**
        - 基于一个简单的遍历或排序来做决策。
- **时间复杂度：**
    - 常常是 `O(n)` 或 `O(n log n)`，因为往往是一次遍历或排序。
- **贪心算法的优缺点：**
    - **优点：** 简单易实现、效率高。
    - **缺点：** 不能保证全局最优解，需结合题意验证。

---

## 三、加减法与运算符优先级的介绍

- **运算符优先级（由高到低）：**

| 运算符 | 描述 | 优先级 |
| --- | --- | --- |
| `()` | 圆括号 | 20 |
| `+` / `-` | 加法与减法 | 14 |
| `*` / `/` | 乘法与除法 | 15 |
| `>=` / `<=` | 大于等于/小于等于 | 11 |
| `==` / `!=` | 相等/不相等 | 10 |
| `&&` | 逻辑与 | 6 |

- 在表达式 `candies[i] + extraCandies >= maxCandy` 中为什么加法不需要加括号？
    - `+` 的优先级是 `14`，而 `>=` 的优先级是 `11`，加法运算会在比较之前被计算。
- 注意：
    - 在混合使用不同运算符时，可以使用 `()` 来提高可读性。