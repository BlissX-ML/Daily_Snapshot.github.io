---
layout: default
title: "Num. 34 - Leaf-Similar Trees"
slug: "Num34"
date: 2025-04-24 11:00:00 +0800
permalink: /leetcode-75/Num34/
---


# Num. 34 - Leaf-Similar Trees

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

<img 
src="{{ '/assets/images/leetcode/Leaf-Similar-Trees-example.png' | relative_url }}" 
alt="Example"
class="leetcode-example-image" 
style="max-width: 13em; margin-top: 0.5em; margin-button: 0.5em;"
/>

For example, in the given tree above, the leaf value sequence is `(6, 7, 4, 9, 8)`.

Two binary trees are considered *leaf-similar* if their leaf value sequence is the same.

Return `true` if and only if the two given trees with head nodes `root1` and `root2` are leaf-similar.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Leaf-Similar-Trees-example1.jpg' | relative_url }}" 
alt="Example"
class="leetcode-example-image" 
style="max-width: 25em;"
/>
Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]  
Output: true

#### Example 2:
<img 
src="{{ '/assets/images/leetcode/Leaf-Similar-Trees-example2.jpg' | relative_url }}" 
alt="Example"
class="leetcode-example-image" 
style="max-width: 15em;"
/>
Input: root1 = [1,2,3], root2 = [1,3,2]  
Output: false

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var leafSimilar = function(root1, root2) {
    if(root1 === null || root2 === null) return false; 

    let currRoot1 = root1;
    let currRoot2 = root2;

    let leftRoot1 = currRoot1.left;
    let leftRoot2 = currRoot2.left;
    
    if(node.left === null && node.right === null) {
        let value = node.value;
    }

    currRoot1 = leftRoot1;
    currRoot2 = leftRoot2;

};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var leafSimilar = function(root1, root2) {
    let getNodes = (root, nodes) => {
        if(!root) return;
        if(!root.left && !root.right) {
            nodes.push(root.val);
            return;
        }
        getNodes(root.left, nodes);
        getNodes(root.right, nodes);
    }

    let nodes1 = [];
    let nodes2 = [];

    getNodes(root1, nodes1);
    getNodes(root2, nodes2);

    if(nodes1.length !== nodes2.length) return false;

    for(let i = 0; i < nodes1.length; i++) {
        if(nodes1[i] !== nodes2[i]) return false;
    }

    return true;
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、总结递归中的 `return` 的三种情况**

1. **使用外部变量记录（可以不写 `return`）**

    - **目的：** 把值存入外部结构（如数组或变量），递归只起遍历作用

    - **是否需要 return：** ✅ **可以不写**

    - **示例：**
        
        ```jsx
        let sum = 0;
        function dfs(node) {
          if (!node) return;  // 防御性 return（可选）
          sum += node.val;
          dfs(node.left);
          dfs(node.right);
        }
        ```
        
2. **依赖子递归返回值组合结果（必须写 `return`）**

    - **目的：** 用 `return` 把子问题结果传回上层，进行组合、比较、加总等

    - **是否需要 return：** ✅ **必须写**

    - **示例：**
        
        ```jsx
        function maxDepth(node) {
          if (!node) return 0;
          return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
        }
        ```
        
3. **提前中止或剪枝（推荐写 `return`，用于终止递归）**

    - **目的：** 在递归过程中提前结束当前分支，不再向下递归，避免无意义运算

    - **是否需要 return：** ✅ **推荐写**（提高效率，控制逻辑）

    - **示例：**
        
        ```jsx
        function collectLeaves(root, arr) {
          if (!root) return;                         // 防御
          if (!root.left && !root.right) {
            arr.push(root.val);                      // 存入外部数组
            return;                                  // ✅ 剪枝：叶子节点无需递归左右
          }
          collectLeaves(root.left, arr);
          collectLeaves(root.right, arr);
        }
        ```
        

### **二、总结语**

- 若只是记录数据，return 可选；

- 若用返回值参与运算（加法、比较等），必须 return；

- 若在中间想终止递归，建议用 return 剪枝，提高效率。
    
<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 场景 | 是否需要 `return` | 原因 |
| --- | --- | --- |
| 数据存到外部变量（如数组、Map） | ❌ 不需要 | 不依赖返回值 |
| 要靠返回值做运算 | ✅ 必须 | 不 `return` 就没有值可用 |
| 为了提前终止递归 | ✅ 推荐 | 节省计算、控制逻辑路径 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


{% include hr_write_word.html text="END" %}
