---
layout: default
title: "Num. 37 - Longest ZigZag Path in a Binary Tree"
slug: "Num37"
date: 2025-04-27 10:00:00 +0800
permalink: /leetcode-75/Num37/
---

# Num. 37 - Longest ZigZag Path in a Binary Tree

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
You are given the `root` of a binary tree.

A ZigZag path for a binary tree is defined as follow:

- Choose **any** node in the binary tree and a direction (right or left).

- If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
- Change the direction from right to left or from left to right.
- Repeat the second and third steps until you can't move in the tree.

Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return *the longest **ZigZag** path contained in that tree*.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Longest-ZigZag-Path-in-a-Binary-Tree-example1.png' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
/>
Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]  
Output: 3  
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

#### Example 2:
<img 
src="{{ '/assets/images/leetcode/Longest-ZigZag-Path-in-a-Binary-Tree-example2.png' | relative_url }}" 
alt="Example2"
class="leetcode-example-image" 
/>
Input: root = [1,1,1,null,1,null,null,1,1,null,1]  
Output: 4  
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).

#### Example 3:
Input: root = [1]  
Output: 0

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var longestZigZag = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 0;

    let judgeNodes = (nodes, maxPath) => {
        if(!nodes.left && !nodes.right) return 0;
        
        // 设定有左边的是0，有右边的是1吧，然后找到0，下一个就找1这种
    }

    judgeNodes(root, 0)
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var longestZigZag = function(root) {
    if (!root) return 0;

    let maxPath = 0;

    let judgeNodes = (node, pathLen, isLeftDirection) => {
        if (!node) return;

        // 每到一个节点，更新最大 ZigZag 路径长度
        maxPath = Math.max(pathLen, maxPath);

        if (isLeftDirection) {
            // 上一步是向左走的，当前应向右走
            judgeNodes(node.right, pathLen + 1, false);

            // 如果继续向左，方向未交替，需要重新开始计算（步长重置为1）
            judgeNodes(node.left, 1, true);
        } else {
            // 上一步是向右走的，当前应向左走
            judgeNodes(node.left, pathLen + 1, true);

            // 如果继续向右，方向未交替，需要重新开始计算（步长重置为1）
            judgeNodes(node.right, 1, false);
        }
    };

    // 从 root 出发，第一步可以选择向左或向右
    judgeNodes(root.left, 1, true);
    judgeNodes(root.right, 1, false);

    return maxPath;
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、Longest ZigZag Path 总结笔记**

1. **题目要求**

    - 在二叉树中，**交替左右移动**，记录最长 ZigZag 路径的步数。

    - **步数**：每移动一次（从一个节点到子节点）记为1步。

2. **核心思路**

    - 每次递归时，记录：

        - 当前节点 `node`

        - 当前路径步数 `pathLen`

        - 当前移动方向 `isLeftDirection`（true 表示上次向左走，false 表示向右）

    - 每次成功交替方向，路径步数 `+1`。

    - 如果继续同方向（未交替），必须**重新起步，步数重置为 1**。

3. **特别注意**

    - 初始时，从 `root.left` 和 `root.right` 出发，分别假设第一次向左或向右，步数初始化为 `1`。

    - `maxPath` 在每次递归时更新，记录最大步数。

    - **不是通过 if 判断是否有左右子节点**，而是**直接优先递归当前该走的方向**：

        - 如果目标子节点是 `null`，自然递归会结束，无需额外判断；

        - 这样可以让递归逻辑更简洁，避免复杂的条件嵌套。

4. **伪代码逻辑**
    
    ```jsx
    dfs(node, pathLen, isLeftDirection):
        if node == null: return
        更新 maxPath = max(maxPath, pathLen)
    
        if isLeftDirection:
            dfs(node.right, pathLen + 1, false)  // 交替走 → 成功，步数+1
            dfs(node.left, 1, true)              // 没交替 → 重新起步
        else:
            dfs(node.left, pathLen + 1, true)
            dfs(node.right, 1, false)
    ```

{% include hr_write_word.html text="END" %}
