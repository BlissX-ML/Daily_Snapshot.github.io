---
layout: default
title: "Num. 41 - Search in a Binary Search Tree"
slug: "Num41"
date: 2025-04-29 12:00:00 +0800
permalink: /leetcode-75/Num41/
---

# Num. 41 - Search in a Binary Search Tree

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
You are given the `root` of a binary search tree (BST) and an integer `val`.

Find the node in the BST that the node's value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Search-in-a-Binary-Search-Tree-example1.jpg' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
style="max-width: 15em;"
/>
Input: root = [4,2,7,1,3], val = 2  
Output: [2,1,3]

#### Example 2:
<img 
src="{{ '/assets/images/leetcode/Search-in-a-Binary-Search-Tree-example2.jpg' | relative_url }}" 
alt="Example2"
class="leetcode-example-image" 
style="max-width: 15em;"
/>
Input: root = [4,2,7,1,3], val = 5  
Output: []

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var searchBST = function(root, val) {
    const findMainNodes = (nodes) => {
        if(!nodes) return;

        findMainNodes(nodes.left);
        findMainNodes(nodes.right);

        if(nodes.val === val) {
            return nodes
        }
    }

    console.log(findMainNodes(root));
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var searchBST = function(root, val) {
    if(!root) return null;
    if(root.val === val) {
        return root;
    } else if (root.val > val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、searchBST 解题笔记**

1. **题目要求**
    
    在一棵二叉搜索树（BST）中，找到值等于 `val` 的节点，并返回以这个节点为根的子树。如果不存在，返回 `null`。
    
    - **快速记忆口诀**

        - 搜索BST，比较大小走单边；

        - 找到节点就返回，没找到继续递归。
    
2. **解题思路总结**

    - **错误常见思路（需要避免）**

        - 直接左右子树都递归（遍历整棵树）。

        - 忽略了 BST 的有序性，导致效率低。

        - 递归时返回值未正确传递，导致搜索结果丢失。

    - **正确思路**

        - 充分利用 BST 特性，**比较大小，决定搜索方向**。

        - 搜索时只在一条路径上移动，不需要遍历全部节点。

        - 如果当前节点的值等于 `val`，直接返回当前节点。

        - 如果 `val` 小于当前节点的值，递归搜索左子树。

        - 如果 `val` 大于当前节点的值，递归搜索右子树。

3. **二叉搜索树（BST）特点**
    
<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 特性 | 说明 |
| --- | --- |
| 节点值大小关系 | 左子树节点值 < 根节点值 < 右子树节点值 |
| 搜索路径 | 每次根据大小比较，走左边或右边 |
| 搜索效率 | 理想情况 O(log n)，最坏情况 O(n) |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


{% include hr_write_word.html text="END" %}
