---
layout: default
title: "Num. 35 - Count Good Nodes in Binary Tree"
slug: "Num35"
date: 2025-04-24 12:00:00 +0800
permalink: /leetcode-75/Num35/
---

# Num. 35 - Count Good Nodes in Binary Tree

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given a binary tree `root`, a node *X* in the tree is named **good** if in the path from root to *X* there are no nodes with a value *greater than* X.

Return the number of **good** nodes in the binary tree.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Count-Good-Nodes-in-Binary-Tree-example1.png' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
style="max-width: 18em;"
/>
Input: root = [3,1,4,3,null,1,5]  
Output: 4  
Explanation: Nodes in blue aregood.  
Root Node (3) is always a good node.  
Node 4 -> (3,4) is the maximum value in the path starting from the root.  
Node 5 -> (3,4,5) is the maximum value in the path  
Node 3 -> (3,1,3) is the maximum value in the path.

#### Example 2:
<img 
src="{{ '/assets/images/leetcode/Count-Good-Nodes-in-Binary-Tree-example2.png' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
style="max-width: 12em;"
/>
Input: root = [3,3,null,4,2]  
Output: 3  
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

#### Example 3:
Input: root = [1]  
Output: 1  
Explanation: Root is considered asgood.

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var goodNodes = function(root) {
    let rootNode = root.val;

    let compareNodes = (node, goodNodes) => {
        if(!node) return;
        let leftNode = node.left;
        let rightNode = node.right;
        if(leftNode && rightNode) {
            let maxvalue = Math.max(leftNode.val, rightNode.val);
            goodNodes.push(maxvalue);
            return;
        }
    }

    let goodvalue = [];
    compareNodes(root, goodvalue);

    return goodvalue.length + 1;

};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var goodNodes = function(root) {
    let count = 0;

    let goodNodes = (nodes, maxValue) => {
        if(!nodes) return;
        if(nodes.val >= maxValue) {
            count++;
        }
        maxValue = Math.max(maxValue, nodes.val);
        goodNodes(nodes.left, maxValue);
        goodNodes(nodes.right, maxValue);
    }

    goodNodes(root, root.val);

    return count;
};
</code></pre>


{% include hr_write_word.html text="END" %}
