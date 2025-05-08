---
layout: default
title: "Num. 39 - Binary Tree Right Side View"
slug: "Num39"
date: 2025-04-29 10:00:00 +0800
permalink: /leetcode-75/Num39/
---

# Num. 39 - Binary Tree Right Side View

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Binary-Tree-Right-Side-View-example1.png' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
style="max-width: 15em;"
/>
Input: root = [1,2,3,null,5,null,4]  
Output: [1,3,4]

#### Example 2:
<img 
src="{{ '/assets/images/leetcode/Binary-Tree-Right-Side-View-example2.png' | relative_url }}" 
alt="Example2"
class="leetcode-example-image" 
style="max-width: 20em;"
/>
Input: root = [1,2,3,4,null,null,null,5]  
Output: [1,3,4,5]

#### Example 3:
Input: root = [1,null,3]  
Output: [1,3]

#### Example 4:
Input: root = []  
Output: []

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var rightSideView = function(root) {
    // 这个就是要一层一层的搜索吧，然后把每一层的最后一个元素从map中提取出来？
    // 然后用层作为map的指针应该是。

    let elementLayer = new Map();
    elementLayer.set(0, []);

    const searchNodes = (nodes, layer) => {
        if(!nodes) return;

        searchNodes(nodes.left, layer + 1);
        searchNodes(nodes.right, layer + 1);

        if(elementLayer.get(layer)) {
            let value = nodes.val;
            elementLayer.set(layer, elementLayer.get(layer).push(value))
        } else {
            elementLayer.set(layer, [])
        }
    }

    searchNodes(root, 1);

    let keys  = new Set(elementLayer.keys());
    let arr = [];
    for(let m of [...keys]) {
        let currentArray = elementLayer.get(m);
        arr.push(currentArray[currentArray.length - 1]);
    }
    
    return arr;
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var rightSideView = function(root) {
    let elementLayer = new Map();

    const searchNodes = (nodes, layer) => {
        if(!nodes) return;

        if(!elementLayer.has(layer)) {
            elementLayer.set(layer, nodes.val)
        }
        searchNodes(nodes.right, layer + 1);
        searchNodes(nodes.left, layer + 1);
    }

    searchNodes(root, 0);

    let arr = [];
    for(let i = 0; i < elementLayer.size; i++) {
        arr.push(elementLayer.get(i));
    }
    
    return arr;
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、为什么 `searchNodes(root, 0)` 从 0 开始**

- 层数(layer)是递归记录的深度。

- 二叉树的**根节点 ( `root` ) 处于第0层**（最上面），每往下一层，层数 +1。

- **示例**：

    - 层0:  `root`节点

    - 层1:  `root.left`, `root.right`

    - 层2:  `root.left.left`, `root.left.right`, ...

### **二、Right Side View 两种思路对比总结**

1. **我的思路**

    - **每一层建立一个数组**，保存整层所有节点。

    - 最后取每层数组的**最后一个元素**作为右视图。

    - **特点**：

        - 数据保存完整（每层所有节点都有）。

        - 空间开销稍大（保存了冗余信息）。

        - 适合需要拿到每一层所有节点的题目。

2. **标准最优思路**

    - **每一层只记录第一个遇到的节点**（从右往左遍历，第一次遇到的节点就是右边节点）。

    - 后续同层节点忽略，只取最先遇到的节点。

    - **特点**：

        - 空间开销小，只记录一个节点。

        - 时间效率高。

        - 非常适合只需要右视图结果的题目。

3. **总结对比表**
    
<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 项目 | 我的思路（保存整层） | 标准思路（只保存右侧第一个） |
| --- | --- | --- |
| 保存内容 | 整层所有节点数组 | 每层第一个遇到的节点 |
| 空间复杂度 | 高 | 低 |
| 操作步骤 | 多（push所有元素） | 少（只set一次） |
| 适用场景 | 打印整层，取右元素 | 只要右视图 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


{% include hr_write_word.html text="END" %}
