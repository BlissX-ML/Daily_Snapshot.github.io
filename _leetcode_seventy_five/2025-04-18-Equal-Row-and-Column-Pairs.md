---
layout: default
title: "Num. 23 - Equal Row and Column Pairs"
slug: "Num23"
date: 2025-04-17 11:00:00 +0800
permalink: /leetcode-75/Num23/
---

# Num. 23 - Equal Row and Column Pairs

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given a **0-indexed** `n x n` integer matrix `grid`, *return the number of pairs* `(ri, cj)` *such that row* `ri` *and column* `cj` *are equal*.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img
  src="{{ '/assets/images/leetcode/Equal-Row-and-Column-Pairs-Example1.jpg' | relative_url }}"
  alt="Example1"
  class="leetcode-example-image"
/>
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]  
Output: 1  
Explanation: There is 1 equal row and column pair:  
● (Row 2, Column 1): [2,7,7]

#### Example 2:
<img
  src="{{ '/assets/images/leetcode/Equal-Row-and-Column-Pairs-Example2.jpg' | relative_url }}"
  alt="Example2"
  class="leetcode-example-image"
/>
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]  
Output: 3  
Explanation: There are 3 equal row and column pairs:  
● (Row 0, Column 0): [3,1,2,2]  
● (Row 2, Column 2): [2,4,2,2]  
● (Row 3, Column 2): [2,4,2,2]
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var equalPairs = function(grid) {
    let count = 0;

    // 获得 column 的数组
    let grid_column = [];
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            grid_column[i][j] = grid[i]
        }
    }

    // 获得各个对应的 map
    let mapGrid = new map()
    let mapGrid_column = new map();
    for(let i = 0; i < grid.length; i++) {
        mapGrid.set(grid[i], (mapGrid.get(grid[i]) || 0) + 1);
    }
    for(let i = 0; i < grid_column.length; i++) {
        mapGrid_column.set(grid_column[i], (mapGrid_column.get(grid_column[i]) || 0) + 1);
    }

    for(let i = 0; i < [...mapGrid.keys()]; i++) {
        if([...mapGrid_column.keys()].includes(i)) count++
    }

    return count
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var equalPairs = function(grid) {
    let n = grid.length;
    let count = 0;

    // 获取 grid_column 的数组
    let grid_cols = [];
    for(let j = 0; j < n; j++) {
        let grid_col = [];
        for(let i = 0; i < n; i++) {
            grid_col.push(grid[i][j]);
        }
        grid_cols.push(grid_col.join(''));
    }

    // 对比数组
    for(let i = 0; i < n; i++) {
        let gridStr = grid[i].join('');
        for(let j = 0; j < n; j++) {
            if(gridStr === grid_cols[j]) count++;
        }
    }

    return count;
};
</code></pre>
![image]({{ "/assets/images/leetcode/Equal-Row-and-Column-Pairs-Solusion1.png" | relative_url }})

<pre><code class="language-js">
var equalPairs = function(grid) {
    let grid_map = new Map();
    let count = 0;
    let len = grid.length;

    // 存储键值对
    for(let i = 0; i < len; i++) {
        let gridStr = grid[i].join(',');
        grid_map.set(gridStr, (grid_map.get(gridStr) || 0) + 1);
    }

    // 转换得到列的grid，再和当前 map 相对比
    for(let j = 0; j < len; j++) {
        let col = [];
        for(let i = 0; i < len; i++) {
            col.push(grid[i][j]);
        }
        
        // 等 col 本轮存储完毕再转换为字符串
        let colStr = col.join(',');
        if(grid_map.has(colStr)){
            count += grid_map.get(colStr)
        }
    }

    return count;
};
</code></pre>
![image]({{ "/assets/images/leetcode/Equal-Row-and-Column-Pairs-Solusion2.png" | relative_url }})


{% include hr_write_word.html text="END" %}
