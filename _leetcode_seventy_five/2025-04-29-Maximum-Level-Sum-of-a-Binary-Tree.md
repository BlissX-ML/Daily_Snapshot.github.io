---
layout: default
title: "Num. 40 - Maximum Level Sum of a Binary Tree"
slug: "Num40"
date: 2025-04-29 11:00:00 +0800
permalink: /leetcode-75/Num40/
---

# Num. 40 - Maximum Level Sum of a Binary Tree

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given the `root` of a binary tree, the level of its root is `1`, the level of its children is `2`, and so on.

Return the **smallest** level `x` such that the sum of all the values of nodes at level `x` is **maximal**.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Maximum-Level-Sum-of-a-Binary-Tree-example1.jpg' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
/>
Input: root = [1,7,0,7,-8,null,null]  
Output: 2  
Explanation:  
Level 1 sum = 1.  
Level 2 sum = 7 + 0 = 7.  
Level 3 sum = 7 + -8 = -1.  
So we return the level with the maximum sum which is level 2.

#### Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]  
Output: 2

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x2B55;
<pre><code class="language-js">
var maxLevelSum = function(root) {
    // 母节点的 level 是 0 哈。
    // 获得每一层元素的 map，这个没有顺序要求了就。
    let nodesMap = new Map();

    const getNodesMap = (nodes, level) => {
        if(!nodes) return;

        if(nodesMap.has(level)) {
            nodesMap.set(level, nodesMap.get(level) + nodes.val);
        } else {
            nodesMap.set(level, nodes.val);
        }

        getNodesMap(nodes.left, level + 1);
        getNodesMap(nodes.right, level + 1);
    }

    getNodesMap(root, 0);

    let keys = new Set(nodesMap.keys());

    let maxSum = -Infinity;
    let maxLevel;

    for(let n of keys) {
        if(nodesMap.get(n) > maxSum) {
            maxSum = Math.max(maxSum, nodesMap.get(n))
            maxLevel = n;
        }
    }

    return maxLevel + 1;
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var maxLevelSum = function(root) {
    const nodesMap = new Map();

    const getNodesMap = (node, level) => {
        if (!node) return;

        nodesMap.set(level, (nodesMap.get(level) || 0) + node.val);

        getNodesMap(node.left, level + 1);
        getNodesMap(node.right, level + 1);
    };

    getNodesMap(root, 0);

    let maxSum = -Infinity;
    let maxLevel = 0;

    for (const [level, sum] of nodesMap.entries()) {
        if (sum > maxSum) {
            maxSum = sum;
            maxLevel = level;
        }
    }

    return maxLevel + 1;
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、Map.prototype.entries() 方法总结**

1. **基本介绍**

    - `entries()` 是 `Map` 实例的方法。

    - 它返回一个新的**迭代器对象**，其中包含 **[key, value]** 形式的**键值对数组**。

    - 这个迭代器可以用于 `for...of` 循环，或者通过 `.next()` 手动遍历。

2. **语法**

    - 语法格式：`map.entries()`

    - 不需要传参数。

    - 返回一个**Map迭代器对象**，每次迭代返回 `[key, value]` 数组。

3. **示例**：`for (const [key, value] of map.entries()) { console.log(key, value); }`

4.  和 `forEach` 的区别

    - `map.entries()` 是**生成迭代器**，适合搭配 `for...of` 使用。

    - `map.forEach()` 是**直接遍历每个元素并执行回调函数**，不能中途 `break`。

5. **小总结**
    
<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 特点 | 说明 |
| --- | --- |
| 返回值 | Map 迭代器（可用 `for...of` 遍历） |
| 每次产出 | `[key, value]` 数组 |
| 是否可中断循环 | 可以（使用 `for...of` 时可以 `break`） |
| 使用场景 | 想遍历键值对且灵活控制时使用 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


{% include hr_write_word.html text="END" %}
