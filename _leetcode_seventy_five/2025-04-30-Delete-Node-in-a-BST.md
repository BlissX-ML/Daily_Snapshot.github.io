---
layout: default
title: "Num. 42 - Delete Node in a BST 😩"
slug: "Num42"
date: 2025-04-30 10:00:00 +0800
permalink: /leetcode-75/Num42/
---

# Num. 42 - Delete Node in a BST 😩

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return *the **root node reference** (possibly updated) of the BST*.

Basically, the deletion can be divided into two stages:

1. Search for a node to remove.
2. If the node is found, delete the node.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Delete-Node-in-a-BST-example1.jpeg' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
style="max-width: 25em;"
/>
Input: root = [5,3,6,2,4,null,7], key = 3  
Output: [5,4,6,2,null,null,7]  
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.  
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.  
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
<img 
src="{{ '/assets/images/leetcode/Delete-Node-in-a-BST-example2.jpeg' | relative_url }}" 
alt="Example2"
class="leetcode-example-image" 
/>

#### Example 2:
Input: root = [5,3,6,2,4,null,7], key = 0  
Output: [5,3,6,2,4,null,7]  
Explanation: The tree does not contain a node with value = 0.\

#### Example 3:
Input: root = [], key = 0  
Output: []

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var deleteNode = function(root, key) {
    if(!root) return null;

    if(root.val === key) {
        root = root.left;
        return root;
    } else {
        return deleteNode(root.left, key);
        return deleteNode(root.right, key);
    }

    return root;
};
</code></pre> 
<br />

## **Solution via Comments / GPT**😩😩😩
<pre><code class="language-js">
var deleteNode = function(root, key) {
    if (!root) return null; 

    // 根据大小关系决定向哪边走
    if (key > root.val) {
        root.right = deleteNode(root.right, key); // 向右子树递归删除
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key); // 向左子树递归删除
    } else {
        // 找到了要删除的节点

        // 情况1：无左子树，直接用右子树替代
        if (!root.left) return root.right;

        // 情况2：无右子树，直接用左子树替代
        if (!root.right) return root.left;

        // 情况3：有左右子树
        // 找右子树中最小的节点（中序后继）
        let canReplacedNode = root.right;
        while (canReplacedNode.left) {
            canReplacedNode = canReplacedNode.left;
        }

        // 用该最小节点的值替换当前节点的值
        root.val = canReplacedNode.val;

        // 删除右子树中那个被提上来的最小节点
        root.right = deleteNode(root.right, canReplacedNode.val);
    }

		// 返回更新后的根节点
    return root; 
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、二叉搜索树删除节点 deleteNode 解题逻辑**

1. **场景示例**

    - 假设有一棵二叉搜索树，要删除节点 `3`
        
        ```jsx
               5
              / \
             3   7
            / \   \
           2   4   8
        ```
        
2. **BST 的基本规则**

    - 左子树 < 当前节点 < 右子树

    - 所以在查找过程中可以通过比较值，决定往左还是右走，提高效率

3. **删除节点的三种情况**

    - **情况 1**：要删除的是叶子节点（无子节点）

        - 直接删掉。

    - **情况 2**：只有一个子节点

        - 用它的子节点替代它自己。

    - **情况 3**：有两个子节点（**最复杂情况**）

        - 找到它右子树中最小的节点（或左子树中最大的节点）作为“替身”

        - 把“替身”的值赋给当前节点

        - 然后再去右子树中递归删除这个“替身”节点，防止重复

4. **思路优化**


    - 执行 `root.left = deleteNode(root.left, key)`，表示将递归结果挂回左子树。

    - 当前节点是 3，等于目标值，找到了要删除的节点，进入 `else` 分支。

    - 节点 3 同时拥有左右子树，因此 `if (!root.left)` 和 `if (!root.right)` 都不成立。进入 **两子节点** 的处理逻辑。

    - 根据 BST 的特性，我们选择**右子树中最小的节点**作为“替代节点”。

    - 从右子树的根节点（4）开始，不断向左遍历，直到找到最左边的节点，即最小值节点。

    - 将这个最小值节点的值赋给当前节点（即把 3 替换为 4）。

    - 然后以右子树为根，再次调用 `deleteNode()` 删除那个已被提上来的最小值节点（防止重复）。

5. **快速记忆口诀**

    - 找节点 → 判断大小走左右

    - 找到节点 → 判断几种情况处理删除

    - 两个子节点 → 找右边最小值替换，再删原值


{% include hr_write_word.html text="END" %}

