---
layout: default
title: "Num. 33 - Maximum Depth of Binary Tree"
slug: "Num33"
date: 2025-04-24 10:00:00 +0800
permalink: /leetcode-75/Num33/
---

# Num. 33 - Maximum Depth of Binary Tree

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Maximum-Depth-of-Binary-Tree-example1.jpg' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
style="width: 18em;"
/>
Input: root = [3,9,20,null,null,15,7]  
Output: 3

#### Example 2:
Input: root = [1,null,2]  
Output: 2

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var maxDepth = function(root) {
    // 位于第几层，每层最多有depth ** 2个元素
    let depth = 1;

    let point = 0;

    while(point <= root.length) {
        ele = depth ** 2;
        if(root)
    }

    return depth;
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var maxDepth = function(root) {
    if(root === null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1
};
</code></pre>

![image]({{ "/assets/images/leetcode/Maximum-Depth-of-Binary-Tree.png" | relative_url }})

{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、二叉树节点常用属性**
<pre><code class="language-js">
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
</code></pre>

<div style="margin-left: 0em;">
{% capture tableIndent %}
| 属性名 | 说明 |
| --- | --- |
| `val` | 当前节点的值（value） |
| `left` | 左子节点，类型为 `TreeNode` 或 `null` |
| `right` | 右子节点，类型为 `TreeNode` 或 `null` |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>



### **二、树类题型常规解法总结**

- **判断题型：常见分类**
    
<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| 类型 | 举例 | 关键词 |
| --- | --- | --- |
| 1. 求深度/高度/路径 | `maxDepth`, `diameterOfBinaryTree` | 最大值、路径、深度 |
| 2. 遍历树 | `preorder`, `inorder`, `postorder`, `levelOrder` | 前中后序、层序 |
| 3. 判断结构 | `isSymmetric`, `isBalanced`, `sameTree` | 对称、相同、平衡 |
| 4. 操作结构 | `invertTree`, `mergeTrees`, `flatten` | 翻转、合并、展开 |
| 5. 路径处理 | `pathSum`, `hasPathSum`, `sumNumbers` | 根到叶、路径和 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

- **核心技巧**
    
<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| 技巧 | 用法 |
| --- | --- |
| **递归** | 处理树最常用，配合**后序遍历**使用 |
| **DFS/BFS** | 用栈/队列处理非递归遍历、层序遍历 |
| **模板** | 模板函数结构（见下一节） |
| **辅助函数** | 多数复杂树题需要写 `helper(root)` 形式的辅助递归 |
| **栈模拟** | 二叉搜索树（BST）中序非递归常用栈模拟 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

- **通用递归模板**
    
    ```jsx
    function traverse(root) {
        if (root === null) return;  // 前序位置（处理根节点）
        
        traverse(root.left);        // 中序位置（处理中间节点）
        traverse(root.right);       // 后序位置（处理子结果）
    }
    ```
    

### **三、知识点总结**

- 树的题**大多数需要递归**，因为它的结构就是递归定义的。

- 但递归函数可以单独写在外面，也可以写成内部函数，只要逻辑清晰就好！

<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| 是否嵌套调用？ | 是，递归一定是嵌套调用的 |
| --- | --- |
| 每次都 return 吗？ | 是，每个调用最终都要 return 一个值 |
| 内层 return 会不会“没用”？ | 不会的，它会传给上一层，影响最终计算 |
| 只要 return 写对，递归就能自动完成遍历 | ✅ 正确 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


{% include hr_write_word.html text="END" %}
