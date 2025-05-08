---
layout: default
title: "Num. 38 - Lowest Common Ancestor of a Binary Tree"
slug: "Num38"
date: 2025-04-27 11:00:00 +0800
permalink: /leetcode-75/Num38/
---

# Num. 38 - Lowest Common Ancestor of a Binary Tree

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**).”
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Lowest-Common-Ancestor-of-a-Binary-Tree-example1.png' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
/>
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1  
Output: 3  
Explanation: The LCA of nodes 5 and 1 is 3.

#### Example 2:
<img 
src="{{ '/assets/images/leetcode/Lowest-Common-Ancestor-of-a-Binary-Tree-example2.png' | relative_url }}" 
alt="Example2"
class="leetcode-example-image" 
/>
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4  
Output: 5  
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

#### Example 3:
Input: root = [1,2], p = 1, q = 2  
Output: 1
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var lowestCommonAncestor = function(root, p, q) {
    
    let judgeLCA = (nodes, p, q, sucessP, successQ) => {
        if(!nodes) return;
        if(!nodes.left && !nodes.right) return;

        // 先判断当前节点本身是否符合
        // 在判断左节点遍历下有没有符合的，在判断右节点
        // 每一个节点都要作为根节点遍历一次
        if(nodes.val === p) {
            sucessP = true;
        } else if (nodes.val === q) {
            successQ = true;
        }

        judgeLCA(nodes.left, p, q, sucessP, successQ);
        judgeLCA(nodes.right, p, q, sucessP, successQ);

        return sucessP && successQ ? nodes.val : null;
    }

    return  judgeLCA(root, p, q, false, false);
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
function lowestCommonAncestor(root, p, q) {
    let pExit = false, qExit = false;

    function dfs(node) {
        if (!node) return null;

        // 递归遍历左子树和右子树
        const left = dfs(node.left);
        const right = dfs(node.right);

        // 如果当前节点是 p，标记已找到，并返回该节点
        if (node === p) {
            pExit = true;
            return node;
        }

        // 如果当前节点是 q，标记已找到，并返回该节点
        if (node === q) {
            qExit = true;
            return node;
        }

        // 如果左子树和右子树都找到了目标节点之一，当前节点就是最近公共祖先
        if (left && right) return node;

        // 如果只在一边找到，继续向上传递已找到的那个节点
        return left || right;
    }

    const ans = dfs(root);

    // 如果 p 和 q 都存在于树中，返回最近公共祖先；否则返回 null
    return (pExit && qExit) ? ans : null;
}
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、Lowest Common Ancestor 解题逻辑**

1. **解题逻辑**

    - 从根节点开始递归搜索。

    - 每个节点要：

        - **先递归左右子树**；

        - **再判断自己是不是 p 或 q**；

        - 根据左右子树的返回值，决定当前节点是不是 LCA。

2. **为什么要先递归再判断自己？**

    - 因为 p 可能是 q 的祖先。

    - 如果直接判断自己是 p/q 就返回，会漏掉 p/q 在子树的情况。

    - 正确做法是：**无论是不是自己，先把左右子树完整搜完**，然后再考虑当前节点。

3. **注意事项**

    - 如果树中**只有一个目标节点存在**，标准写法会返回那个节点。

    - 如果要求**必须两个节点都存在**，需要额外加 `pExit`、`qExit`标记。

    - 时间复杂度：O(n)，每个节点访问一次。

    - 空间复杂度：O(h)，递归深度，h是树的高度。

    - 加一层内部辅助函数（记录 `pExit`/`qExit`）**不会影响复杂度**，但能让逻辑更清晰。

4. **为什么是和 `nodes` 比而不是 `nodes.val` 比较**

    - 在题目的定义中，`p` 和 `q` 是指向树中某个**节点对象本身**。

    - 比较对象是否相同，应该直接用对象引用比较，即 `node === p` 或 `node === q`。

    - 如果用 `node.val` 去比较，只是比值相等，不保证是同一个节点对象。

    - 树中可能存在**多个节点的值相同**，但它们是**不同的节点对象**。

5. **什么时候返回 `return left || right`**：

    - 如果 `left` 有值（找到了 p 或 q），`right` 是 null，返回 `left`。

    - 如果 `right` 有值（找到了 p 或 q），`left` 是 null，返回 `right`。

    - 如果两边都是 null，返回 null。

6. **示例**：

    - **第一层**：在 `3` 上调用 `dfs(3)`

        - 向左递归 → `dfs(5)`

            - 向左递归 → `dfs(6)` → 左右都是 null，返回 null

            - 向右递归 → `dfs(2)`

                - 左右都是 null，发现节点是 `q=2`，标记 `qExit = true`，返回 `2`

            - 回到节点5

                - 左边是 null，右边返回2

                - 当前节点是 `p=5`，标记 `pExit = true`，返回 `5`

        - 向右递归 → `dfs(1)`

            - 左右都是 null，返回 null

        - 回到节点3

            - 左边返回了5，右边是null

            - 因为只有左边返回，最终返回5

    - 最终结果是5，即节点5是节点5和节点2的最近公共祖先。
    
    ```jsx
        3
       / \
      5   1
     / \
    6   2
    ```
    

### **二、`||`（逻辑或运算符）介绍**

1. **基本用法**

    - `||` 是**逻辑或**，常用于两个表达式中。

    - 规则：

        - 如果第一个表达式是真（truthy），**直接返回第一个表达式**；

        - 如果第一个是假（falsy），**返回第二个表达式**。

2. **本题里的用法**

    - **代码**：`return left || right;`

    - **含义是**：

        - 如果 `left` 非空（truthy），就返回 `left`；

        - 如果 `left` 是 `null`（falsy），就返回 `right`。
        
    - ✅ 好处：**简化代码**，省去了if判断。


{% include hr_write_word.html text="END" %}
