---
layout: default
title: "Num. 44 - Number of Provinces"
slug: "Num44"
date: 2025-05-13 10:00:00 +0800
permalink: /leetcode-75/Num44/
---

# Num. 44 - Number of Provinces

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `ith` city and the `jth` city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return *the total number of **provinces***.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
<img 
src="{{ '/assets/images/leetcode/Number-of-Provinces-example1.jpg' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
/>
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]  
Output: 2

#### Example 2:
<img 
src="{{ '/assets/images/leetcode/Number-of-Provinces-example2.jpg' | relative_url }}" 
alt="Example1"
class="leetcode-example-image" 
/>
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]  
Output: 3

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
none
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var findCircleNum = function(isConnected) {
    let totalCites = isConnected.length;
    let visited = new Array(totalCites).fill(false);
    let count = 0;

    for (let city = 0; city < totalCites; city++) {
        if (!visited[city]) {
            visited[city] = true; 
            dfs(city);         
            count++; 
        }
    }

    function dfs(currentCity) {
        let currentCityArray = isConnected[currentCity];
        for (let nextCity = 0; nextCity < totalCites; nextCity++) {
        
            if (currentCityArray[nextCity] === 1 && !visited[nextCity]) {
                visited[nextCity] = true;
                dfs(nextCity);
            }
        }
    }

    return count;
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、解题逻辑**

1. **最外层遍历城市，判断是否是一个“新省份”**
    
    ```jsx
    for (let city = 0; city < totalCites; city++) {
        if (!visited[city]) {
            visited[city] = true;
            dfs(city);
            count++;
        }
    }
    ```
    
    - 遍历所有城市，看看有没有没被访问过的。

    - 如果一个城市没被访问过，说明是第一次遇到，这一整块连通的城市组成一个“新的省份”。

    - 标记已访问后，就用 `dfs()` 看看它连着哪些其他城市。

    - `count++` 只在第一次遇到一个连通块时执行一次。

2. **DFS 函数定义：分析当前城市能不能连着别人**
    
    ```jsx
    function dfs(currentCity) {
        for (let nextCity = 0; nextCity < totalCites; nextCity++) {
            if (isConnected[currentCity][nextCity] === 1 && !visited[nextCity]) {
                visited[nextCity] = true;
                dfs(nextCity);
            }
        }
    }
    ```
    
    - `nextCity` 就是我们打算去看一下的下一个城市，看看当前城市和它是否连着。

    - `isConnected[currentCity][nextCity] === 1`：说明这两个城市是连通的。

    - `!visited[nextCity]`：说明这是一个没有走过的城市。

    - 如果该城市既没有走过也是和当前所在的城市连通的，就标记 `visited[nextCity] = true`，然后继续以该城市为中心递归找。

    - **if 条件的意义（是否进入递归）**

        - 条件代码：`if (isConnected[currentCity][nextCity] === 1 && !visited[nextCity])`

        - 同时符合两种情况触发：

            - 当前城市和下一个城市是连着的

            - 并且下一个城市是**第一次被发现**

        - 举个例子：
            
            假设现在在城市 A，发现城市 B 跟 A 是连着的，而且 B 没来过，就进去看一眼。
            
            如果 B 也和城市 C 连着，接着往下找。
            
            最终把 A、B、C 一整个省份连通块都找完。
            
3. **visited 数组的作用**
    
    ```jsx
    const visited = new Array(n).fill(false);  // 初始化所有城市为“未访问”
    visited[city] = true;   // 一旦访问城市，标记为已访问
    ```
    
    - **初始化解析：**

        - `new Array(n)`: 创建一个长度为 `n` 的新数组（但每个位置初始是“空”）

        - `.fill(false)`

            - `.fill(value)` 方法会把这个数组中**每一项都填上给定的值**

            - 所以 `.fill(false)` 表示把所有项都填成 `false`，表示所有城市一开始都没有被访问过。

        - 最终效果：`visited = [false, false, false];   // 比如有 3 个城市`

    - **用途解释：**

        - `visited` 的作用是：防止城市被重复访问

        - 一旦城市被访问过，就设置为 `true`，表示已经归属到某个“省份”，后续碰到直接跳过

        - 这也是为什么我们只在外层循环 `if (!visited[city])` 的时候才 `count++`，
            
            因为这时我们是第一次进入这个省份，真正**发现一个新块**。
            
        - 而在 `dfs()` 内部，不会再增加计数，只是把连着的城市都扫一遍而已。

4. **最终返回省份数量**
    
    ```jsx
    return count;
    ```
    
    - 所有城市扫完之后，`count` 就是我们总共发现了几个互不连通的“省份”。

### **二、拆解矩阵**

- **矩阵：**
    
    ```jsx
    isConnected = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1]
    ]
    ```
    
- **第一行：城市 0 的连接情况** `[1, 1, 0]`

    - 城市 0 和自己连（总是 true）

    - 城市 0 和城市 1 连

    - 城市 0 和城市 2 不连 ❌

- **第二行：城市 1 的连接情况** `[1, 1, 0]`

    - 城市 1 和城市 0 连

    - 城市 1 和自己连

    - 城市 1 和城市 2 不连 ❌

- **第三行：城市 2 的连接情况** `[0, 0, 1]`

    - 城市 2 和城市 0 不连 ❌

    - 城市 2 和城市 1 不连 ❌

    - 城市 2 和自己连
    
    ![image]({{ "/assets/images/leetcode/Number-of-Provinces.png" | relative_url }})


{% include hr_write_word.html text="END" %}

