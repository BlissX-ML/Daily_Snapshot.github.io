---
layout: default
title: "Num. 36 - Path Sum III"
slug: "Num36"
date: 2025-04-25 10:00:00 +0800
permalink: /leetcode-75/Num36/
---

# Num. 36 - Path Sum III

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given the `root` of a binary tree and an integer `targetSum`, return *the number of paths where the sum of the values along the path equals* `targetSum`.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Path-Sum-III-example1.jpg' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
style="max-width: 20em;"
/>
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8  
Output: 3  
Explanation: The paths that sum to 8 are shown.

#### Example 2:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22  
Output: 3

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var pathSum = function(root, targetSum) {
    let count = 0;
    let sum = -root.val;

    let getSums = (nodes, targetSum) => {
        if(!nodes) return;
        sum += nodes.val; // -10+10=0;  0+5 = 5; 5+3 = 8;

        if(sum === targetSum) {
            count++;  //count = 1;
            sum = 0;
        }

        if(!nodes.left && !nodes.right) {
            sum = 0;
        }
        
        getSums(nodes.left, targetSum);
        getSums(nodes.right, targetSum);
    } 
    
    getSums(root, targetSum);

    return count;
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var pathSum = function(root, targetSum) {
    if(!root) return 0;

    let countGroups = (node, currComparedSum) => {
        if(!node) return 0;
        
        let fitSum = node.val === currComparedSum ? 1 : 0;
        return (fitSum + 
                countGroups(node.left, currComparedSum - node.val) + 
                countGroups(node.right, currComparedSum - node.val))
    };

    return (countGroups(root, targetSum) + 
				    pathSum(root.left, targetSum) + 
				    pathSum(root.right, targetSum))
};
</code></pre>
<pre><code class="language-js">
var pathSum = function(root, targetSum) {
    let resultCount = 0;
    const sumFreqMap = new Map();
    sumFreqMap.set(0, 1);

    function dfs(node, currentSum) {
        if (!node) return;

        currentSum += node.val;
        resultCount += (sumFreqMap.get(currentSum - targetSum) ?? 0);
        sumFreqMap.set(currentSum, (sumFreqMap.get(currentSum) ?? 0) + 1);

        dfs(node.left, currentSum);
        dfs(node.right, currentSum);

        sumFreqMap.set(currentSum, sumFreqMap.get(currentSum) - 1);
    }

    dfs(root, 0);
    return resultCount;
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、二叉树路径和统计（Path Sum III）题目核心**

- 统计 **二叉树中所有路径和等于目标值的路径个数**。

    - 路径必须 **从某个节点向下（子节点）**，但不一定到叶子节点。

    - 路径可以从任何节点开始，不必从根节点开始。

- **递归嵌套结构分析**

    - **外层函数：`pathSum(root, targetSum)`**

    - **外层函数功能：**

        - 遍历整棵树，把**每一个节点当作起点**，尝试找出从该点出发的所有路径。

        - `countGroups(node, currComparedSum)`：从当前节点出发，尝试往下找出所有符合的路径（`fitSum` 数）。

        - `pathSum(root.left)` & `pathSum(root.right)`：递归处理左右子树（将当前节点的子节点当作新的起点）。

    - **内层函数：**`countGroups(node, currComparedSum)`

    - **内层函数功能：**

        - 从该节点出发，判断往下是否存在路径，路径和正好等于传入的 `fitSum`。

        - 当前节点 `node` 的值若与当前目标值 `currComparedSum` 相等，则 `fitSum = 1`。

        - 否则继续往下递归，让 `currComparedSum -= node.val`，表示路径已经消耗掉当前节点的值。

        - 返回值：当前匹配成功数 + 左子树 + 右子树的匹配数。

- **关键思想理解**
    
<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 思考点 | 解读 |
| --- | --- |
| 为什么要两个函数嵌套？ | 外层遍历每个节点作为起点，内层统计从该点出发能构成几条路径 |
| 为什么左右子树结果要加到一起？ | 一棵树中，所有路径都可能是解，因此要累加 |
| 内层为什么递归要带减去的 sum？ | 当前节点值被减掉，表示路径中已“消耗”掉当前值，继续看剩余目标是否能在下游构造完成 |
| 为什么可以不剪枝？ | 因为题目要求遍历所有路径，不能提前退出，否则会漏解 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

- **一句话总结**

    - 一个递归从整棵树遍历每个节点作为起点；

    - 一个递归从当前节点往下递归找路径和。

    - 通过自己创建的 `countGroups` 函数，用来统计从当前节点出发、是否存在和为目标值 `targetSum` 的路径。这个判断是通过 **目标值减当前节点值** 的方式进行的，每次调用时都更新目标值，以此继续在左右子树中查找。最终，每个节点返回自己这一支下的匹配路径数量 `fitSum`，然后这些 `fitSum` 结果会被累加起来，分别来自：当前节点本身、当前节点的左子树作为新起点的结果、以及右子树作为新起点的结果。这就意味着我们不仅判断当前节点为起点的路径，还会让左子节点、右子节点各自再当一遍起点进行查找，从而覆盖所有可能路径。整体是一个双层递归的结构，外层遍历每个节点，内层查找从该节点开始的所有路径和。

### **二、前缀和 + 哈希表（Map）**

1. **题目描述简述**

    - 给一个二叉树的根节点 `root` 和一个整数 `targetSum`，请你计算**路径和等于 `targetSum` 的路径总数**。

    - 路径不一定要从根节点开始，也不一定以叶子节点结束。

    - 但路径必须是**从父节点到子节点**（也就是从上到下）。

2. **解法思路：前缀和 + 哈希表**

    - 使用一个哈希表 `sumFreqMap` 来记录从根节点到当前节点这条路径上的**前缀和出现的次数**。

    - **变量定义**
        
        ```jsx
        let resultCount = 0;         // 最终返回的答案：有多少路径和为 targetSum
        let sumFreqMap = new Map();  // 用于记录某个前缀和出现的频率
        sumFreqMap.set(0, 1);        // 初始化前缀和为 0 出现 1 次
        ```
        
    - **DFS 递归逻辑**
        
        ```jsx
        function dfs(node, currentSum) {
            if (!node) return;
        
            currentSum += node.val;  // 累加路径和
        
            // 查找是否有某个前缀和 == currentSum - targetSum
            // 如果存在，说明有从该前缀节点到当前节点路径和正好为 targetSum
            resultCount += (sumFreqMap.get(currentSum - targetSum) ?? 0);
        
            // 更新前缀和频率
            sumFreqMap.set(currentSum, (sumFreqMap.get(currentSum) ?? 0) + 1);
        
            // 递归左右子树
            dfs(node.left, currentSum);
            dfs(node.right, currentSum);
        
            // 回溯时，恢复现场，撤销当前前缀和
            sumFreqMap.set(currentSum, sumFreqMap.get(currentSum) - 1);
        }
        
        ```
        
    - **主体执行**
        
        ```jsx
        dfs(root, 0);
        return resultCount;
        ```
        
3. **为什么用 `currentSum - targetSum`？**

    - 比如当前路径和为 `18`

    - 如果我们知道曾经有某个节点的前缀和为 `10`

    - 那么从该节点到当前节点这段路径和为：`18 - 10 = 8`

    - 正好是目标值 `targetSum = 8`，说明这是一条符合要求的路径！

4. **总结记忆点**

    - 每个路径的和不一定从根节点开始！

    - 但路径必须从上到下（父到子）

    - 用 `前缀和` 判断是否曾经存在一条路径：当前累积和 - 目标和

    - 回溯是必须的：每次递归完，要减去当前路径和的计数

5. **回溯的意义与实现的原理**

    - 在这类二叉树的递归遍历中，执行顺序是“先左、后右、再回溯”。这是因为 `dfs(node.left)` 写在前面，递归会**一直沿着左子树走到底**。当走到最底层、即当前节点 `node.left` 和 `node.right` 都为 null 时，函数内的两个递归调用就不再执行，于是开始“回溯”——也就是退出当前函数，返回上一层调用。

    - 此时回到上一个节点，检查它的 `right` 子节点是否存在，如果存在就执行 `dfs(node.right)`，进入右子树递归。右子树也会同样从最左边一路走到底，最后再回溯。

    - 等左、右子树都递归完毕后，才执行函数最后的“清理/回溯逻辑”，例如将当前路径和从 `Map` 中减去。这就确保了**每一条路径的统计记录在走完后被正确撤销，不会影响其他路径**。

    - 所以，递归是深度优先从左走到底，然后一点一点地“爬回来”，右边的递归只有在左边彻底处理完才会执行。

### 三、`??` 符号的意思，并与 `||` 对比

1. **`??` (空值合并运算符)**

    - **基本含义**：如果左边是 `null` 或 `undefined`，就取右边值；否则就用左边值

    - **简单例子**：

        - `let result = a ?? b;`

        - **等价于**：`if (a !== null && a !== undefined) { result = a; } else { result = b;}`

2. **`??` 和 `||` 的区别**
    
    -  **简明总结**

        - `??` 主要解决**0、false、''这些有效值**时，不希望被默认替换的问题。

        - `||` 是传统的或运算符，会把所有假值（包括 0、false）都认为是“无效”从而取右边。

<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 运算符 | 根据什么条件确定返回 | 示例 | 说明 |
| --- | --- | --- | --- |
| `??` | 如果左边是 `null` 或 `undefined`，<br>就用右边 | `null ?? 10 → 10` <br>`0 ?? 10 → 0` | 只看 null/undefined，其他正常值不动 |
| `||`   | 如果左边是假值，就用右边 | `0 || 10 ➔ 10` <br> `false || 'default' ➔ 'default'` | 如果左边是 **假值** <br> `false, 0, '', null, undefined, NaN`，就用右边 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


{% include hr_write_word.html text="END" %}
